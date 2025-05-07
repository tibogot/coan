import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

// Register plugins
gsap.registerPlugin(Draggable, InertiaPlugin);

// Define TypeScript interfaces
interface ProfileType {
  id: number;
  name: string;
  title: string;
  image: string;
  countries: string[];
}

const PROFILES: ProfileType[] = [
  {
    id: 1,
    name: "Chief Christian Nwogu",
    title: "Chairman",
    image: "/Chairman-scaled-tiny.jpg",
    countries: ["Allemagne", "Luxembourg"],
  },
  {
    id: 2,
    name: "Engr. Chukwudi Nwogu",
    title: "Co-Founder & CEO",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/MD-scaled-e1692892180900.jpg",
    countries: ["Allemagne", "France"],
  },
  {
    id: 3,
    name: "Nonso Nwogwu",
    title: "Director",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/pexels-dellon-thomas-1405963.jpg",
    countries: ["France"],
  },
  {
    id: 4,
    name: "Engr Ralf Jonas",
    title: "CTO",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/pexels-dellon-thomas-2474307.jpg",
    countries: ["USA"],
  },
  {
    id: 5,
    name: "Mr Ugwu Osita Sabastine",
    title: "Accountant",
    image:
      "https://coanwaltd.com/wp-content/uploads/2018/12/Mr-Ugwu-Osita-Sabastine.jpg",
    countries: ["UK"],
  },
];

const ProfilesTicker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const draggableRef = useRef<Draggable | null>(null);
  const isHovering = useRef<boolean>(false);
  const isDragging = useRef<boolean>(false);
  const tickerWidthRef = useRef<number>(0);

  // Create a function to create and start animation from a given position
  const startAnimationFromPosition = (
    element: HTMLDivElement,
    startX: number,
    width: number,
  ) => {
    // Kill any existing animations first
    gsap.killTweensOf(element);

    // Clear previous timeline if exists
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Normalize starting position
    let normalizedX = startX;
    if (normalizedX <= -width) {
      normalizedX = 0;
      gsap.set(element, { x: normalizedX });
    } else if (normalizedX > 0) {
      normalizedX = -width + 10;
      gsap.set(element, { x: normalizedX });
    }

    // Calculate remaining duration based on how far we've already gone
    const progress = Math.abs(normalizedX) / width;
    const remainingDuration = 30 * (1 - progress);

    // Create new timeline
    timelineRef.current = gsap.timeline({ repeat: -1 });

    // First move to the end of first set
    timelineRef.current.to(element, {
      x: -width,
      duration: remainingDuration,
      ease: "none",
    });

    // Then loop back to the beginning and continue the full animation
    timelineRef.current.set(element, { x: 0 });
    timelineRef.current.to(element, {
      x: -width,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return timelineRef.current;
  };

  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    // Calculate width of one set of profiles
    const profileElements = tickerElement.querySelectorAll(".profile-card");
    const firstSetProfiles = Array.from(profileElements).slice(
      0,
      PROFILES.length,
    );
    const firstSetWidth = firstSetProfiles.reduce((total, el) => {
      const style = window.getComputedStyle(el);
      const margin =
        parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return total + (el as HTMLElement).offsetWidth + margin;
    }, 0);

    tickerWidthRef.current = firstSetWidth;

    // Set initial position
    gsap.set(tickerElement, { x: 0 });

    // Start the initial animation
    timelineRef.current = startAnimationFromPosition(
      tickerElement,
      0,
      firstSetWidth,
    );

    // Create draggable with InertiaPlugin for momentum-based throwing
    draggableRef.current = Draggable.create(tickerElement, {
      type: "x",
      inertia: true,
      // Enhanced inertia settings for more natural momentum
      throwProps: true, // Enable throw properties
      minDuration: 0.5, // Minimum duration of throw animation
      maxDuration: 2.0, // Maximum duration of throw animation
      throwResistance: 0.55, // Lower value = more slide after throwing (0.55 feels more fluid)
      edgeResistance: 0.65,

      onDragStart: function () {
        isDragging.current = true;

        // Kill any existing animations
        if (timelineRef.current) {
          timelineRef.current.pause();
        }
        gsap.killTweensOf(tickerElement);
      },

      onDrag: function () {
        // Check if we need to loop while dragging
        if (this.x <= -firstSetWidth) {
          // Reset position to create loop effect
          gsap.set(tickerElement, { x: 0 });
          this.update(); // Update Draggable instance with new position
        } else if (this.x > 0) {
          // If dragged too far right, snap to end of first set
          gsap.set(tickerElement, { x: -firstSetWidth + 10 });
          this.update(); // Update Draggable instance with new position
        }
      },

      onDragEnd: function () {
        // Mark drag as ended but let inertia continue
        isDragging.current = false;

        // The inertia will continue automatically due to throwProps
        // Don't restart animation yet - wait for throw complete
      },

      onThrowUpdate: function () {
        // Same loop checking logic during throw animation
        if (this.x <= -firstSetWidth) {
          gsap.set(tickerElement, { x: 0 });
          this.update();
        } else if (this.x > 0) {
          gsap.set(tickerElement, { x: -firstSetWidth + 10 });
          this.update();
        }
      },

      // This is called when the throw/inertia animation completes
      onThrowComplete: function () {
        // Make sure any potential race conditions are handled
        setTimeout(() => {
          if (!isDragging.current && !isHovering.current && tickerElement) {
            // Get final resting position
            const currentX = gsap.getProperty(tickerElement, "x") as number;

            // Start the continuous animation from this exact position
            startAnimationFromPosition(
              tickerElement,
              currentX as number,
              firstSetWidth,
            );
          }
        }, 10);
      },
    })[0];

    // Handle window resize for responsive behavior
    const handleResize = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      // Recalculate widths after resize
      const firstSetWidth = firstSetProfiles.reduce((total, el) => {
        const style = window.getComputedStyle(el);
        const margin =
          parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        return total + (el as HTMLElement).offsetWidth + margin;
      }, 0);

      tickerWidthRef.current = firstSetWidth;

      // Reset position and restart animation
      gsap.set(tickerElement, { x: 0 });
      timelineRef.current = startAnimationFromPosition(
        tickerElement,
        0,
        firstSetWidth,
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup on component unmount
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      // Kill all GSAP animations
      gsap.killTweensOf(tickerElement);

      if (draggableRef.current) {
        draggableRef.current.kill();
      }

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle mouse interaction
  const handleMouseEnter = () => {
    isHovering.current = true;

    // Immediately pause the animation at current position
    if (timelineRef.current) {
      timelineRef.current.pause();
    }

    // Kill any active inertia animation
    //@ts-ignore
    if (draggableRef.current && draggableRef.current.isActive) {
      //@ts-ignore
      draggableRef.current.endDrag();
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;

    // Only restart if not actively dragging
    if (!isDragging.current && tickerRef.current) {
      // Get the exact current position
      const currentX = gsap.getProperty(tickerRef.current, "x") as number;

      // Make sure any inertia has completed
      gsap.killTweensOf(tickerRef.current);

      // Resume animation precisely from current position
      startAnimationFromPosition(
        tickerRef.current,
        currentX as number,
        tickerWidthRef.current,
      );
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-0">
      <div className="inline-flex w-max">
        <div
          ref={tickerRef}
          className="flex cursor-grab touch-pan-x active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          {/* First set of profiles */}
          {PROFILES.map((profile) => (
            <div
              key={`first-${profile.id}`}
              className="profile-card relative m-4 flex h-[600px] w-[450px] flex-col"
            >
              {/* Country Tags */}
              <div className="absolute top-4 left-4 flex space-x-2">
                {profile.countries.map((country, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold"
                  >
                    {country}
                  </span>
                ))}
              </div>

              {/* Profile Image */}
              <img
                src={profile.image}
                alt={profile.name}
                className="h-[80%] w-full rounded-sm object-cover"
              />

              {/* Name & Title */}
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-xl font-medium">{profile.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{profile.title}</p>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {PROFILES.map((profile) => (
            <div
              key={`second-${profile.id}`}
              className="profile-card relative m-4 flex h-[600px] w-[450px] flex-col"
            >
              {/* Country Tags */}
              <div className="absolute top-4 left-4 flex space-x-2">
                {profile.countries.map((country, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold"
                  >
                    {country}
                  </span>
                ))}
              </div>

              {/* Profile Image */}
              <img
                src={profile.image}
                alt={profile.name}
                className="h-[80%] w-full rounded-sm object-cover"
              />

              {/* Name & Title */}
              <div className="flex flex-col justify-between p-4">
                <h3 className="text-xl font-medium">{profile.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{profile.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesTicker;
