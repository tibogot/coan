/// <reference types="react" />

import React, {
  useRef,
  ReactNode,
  ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

import gsap from "gsap";
// @ts-ignore - GSAP SplitText has no proper TypeScript typings
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  //@ts-ignore
}: CopyProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const splitInstancesRef = useRef<any[]>([]);
  const animationsRef = useRef<gsap.core.Timeline[]>([]);

  // Initialize visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle font loading and document visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsReady((prev) => !prev); // Force re-render on tab focus
      }
    };

    const fontReadyPromise = document.fonts?.ready || Promise.resolve();

    fontReadyPromise.then(() => {
      setIsReady(true);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) {
        // Page was restored from bfcache (back/forward navigation)
        setIsReady((prev) => !prev);
      }
    });

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pageshow", handleVisibilityChange);
    };
  }, []);

  // Cleanup function for animations and split text instances
  const cleanupAnimations = () => {
    // Kill all animations
    animationsRef.current.forEach((tl) => {
      if (tl) tl.kill();
    });
    animationsRef.current = [];

    // Revert all split text instances
    splitInstancesRef.current.forEach((split) => {
      if (split && typeof split.revert === "function") {
        split.revert();
      }
    });
    splitInstancesRef.current = [];

    // Clean up scroll triggers
    ScrollTrigger.getAll()
      .filter((trigger) => trigger.vars.trigger === containerRef.current)
      .forEach((trigger) => trigger.kill());
  };

  // Animation logic
  useGSAP(() => {
    if (!containerRef.current || !isReady) return;

    // Clean up previous animations first
    cleanupAnimations();

    // If container isn't visible in DOM, don't bother animating
    if (containerRef.current.offsetParent === null) return;

    // Find all elements to animate
    const elements = containerRef.current.hasAttribute("data-copy-wrapper")
      ? (Array.from(containerRef.current.children) as HTMLElement[])
      : [containerRef.current];

    if (elements.length === 0) return;

    // Process each element
    elements.forEach((element) => {
      try {
        // Create split text
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        splitInstancesRef.current.push(split);

        // Handle text indent if present
        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;
        if (textIndent && textIndent !== "0px" && split.lines.length > 0) {
          //@ts-ignore

          split.lines[0].style.paddingLeft = textIndent;
          element.style.textIndent = "0";
        }

        // Ensure text is initially hidden
        gsap.set(split.lines, { y: "100%" });

        // Create animation
        const timeline = gsap.timeline({
          paused: true,
          onComplete: () => {
            // Fallback to ensure text is visible even if animation fails
            gsap.set(split.lines, { y: "0%" });
          },
        });

        timeline.to(split.lines, {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay,
        });

        animationsRef.current.push(timeline);

        // Play animation based on scroll or immediately
        if (animateOnScroll) {
          // const trigger = ScrollTrigger.create({
          //   trigger: element,
          //   start: "top 75%",
          //   once: true,
          //   onEnter: () => timeline.play(),
          // });
        } else {
          timeline.play();
        }
      } catch (error) {
        console.error("Animation error:", error);
        // If animation fails, make text visible
        gsap.set(element, { visibility: "visible", opacity: 1 });
      }
    });

    // Force refresh scroll triggers
    ScrollTrigger.refresh();

    return () => {
      cleanupAnimations();
    };
  }, [isReady, isVisible, animateOnScroll, delay]);

  // Add a safety net to ensure text is always visible
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".line");
        if (elements.length > 0) {
          elements.forEach((el) => {
            const computedStyle = window.getComputedStyle(el as HTMLElement);
            const transform = computedStyle.transform;

            // If the element is still transformed (hidden), make it visible
            if (transform !== "none" && transform.includes("translate")) {
              gsap.set(el, { y: "0%" });
            }
          });
        }
      }
    }, 2500); // Allow 2.5 seconds for animations to complete

    return () => clearTimeout(safetyTimer);
  }, [isReady, isVisible]);

  if (React.Children.count(children) === 1 && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      //@ts-ignore

      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
