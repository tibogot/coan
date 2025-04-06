// FlyingPaths.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const FlyingPaths = () => {
  const pathRefs = useRef<SVGPathElement[]>([]);
  const endDotRefs = useRef<SVGCircleElement[]>([]);
  const centerDotRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    // Animate moving dashed lines
    pathRefs.current.forEach((path) => {
      gsap.to(path, {
        strokeDashoffset: -10,
        duration: 1.5,
        repeat: -1,
        ease: "linear",
      });
    });

    // Animate blinking destination dots
    endDotRefs.current.forEach((dot) => {
      gsap.to(dot, {
        opacity: 0.3,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
    });

    // Animate center glowing dot
    if (centerDotRef.current) {
      gsap.to(centerDotRef.current, {
        scale: 1.2,
        transformOrigin: "center center",
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      });
    }
  }, []);

  // Utility to assign refs to multiple elements
  const setPathRef = (el: SVGPathElement | null) => {
    if (el && !pathRefs.current.includes(el)) {
      pathRefs.current.push(el);
    }
  };

  const setDotRef = (el: SVGCircleElement | null) => {
    if (el && !endDotRefs.current.includes(el)) {
      endDotRefs.current.push(el);
    }
  };

  return (
    <svg
      viewBox="0 0 666 540"
        preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-0 h-auto w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center Dot */}
      <circle cx="300" cy="300" r="6" fill="orange" ref={centerDotRef} />

      {/* Flying Lines + Dots */}
      <path
        ref={setPathRef}
        d="M300 300 Q320 200 400 150"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="400" cy="150" r="3" fill="orange" />

      <path
        ref={setPathRef}
        d="M300 300 Q350 250 450 200"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="450" cy="200" r="3" fill="orange" />

      <path
        ref={setPathRef}
        d="M300 300 Q380 320 500 300"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="500" cy="300" r="3" fill="orange" />

      <path
        ref={setPathRef}
        d="M300 300 Q360 370 450 400"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="450" cy="400" r="3" fill="orange" />

      <path
        ref={setPathRef}
        d="M300 300 Q300 400 300 500"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="300" cy="500" r="3" fill="orange" />

      <path
        ref={setPathRef}
        d="M300 300 Q200 350 150 450"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="150" cy="450" r="3" fill="orange" />

      <path
        ref={setPathRef}
        d="M300 300 Q250 250 100 200"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="100" cy="200" r="3" fill="orange" />

      <path
        ref={setPathRef}
        d="M300 300 Q280 180 200 100"
        stroke="orange"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
      />
      <circle ref={setDotRef} cx="200" cy="100" r="3" fill="orange" />
    </svg>
  );
};

export default FlyingPaths;
