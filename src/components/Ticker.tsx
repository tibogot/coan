import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LOGOS = [
  { id: 1, name: "Brand 1", color: "#FF5733" },
  { id: 2, name: "Brand 2", color: "#33FF57" },
  { id: 3, name: "Brand 3", color: "#5733FF" },
  { id: 4, name: "Brand 4", color: "#FFFF33" },
  { id: 5, name: "Brand 5", color: "#33FFFF" },
];

const Ticker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    // Create timeline
    timelineRef.current = gsap.timeline({
      repeat: -1, // Infinite loop
    });

    // Get the width of the ticker content
    const tickerWidth = tickerElement.offsetWidth;

    // Animate
    timelineRef.current.to(tickerElement, {
      x: -tickerWidth / 2,
      duration: 20,
      ease: "none",
    });

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  //   const handleMouseEnter = () => {
  //     timelineRef.current?.pause();
  //   };

  //   const handleMouseLeave = () => {
  //     timelineRef.current?.play();
  //   };

  return (
    <div
      className="relative w-full overflow-hidden py-20"
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
    >
      <div className="inline-flex w-max">
        <div ref={tickerRef} className="flex">
          {/* First set of logos */}
          <div className="flex items-center gap-24 px-8">
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex h-24 w-48 items-center justify-center rounded-lg bg-white"
                style={{ border: `2px solid ${logo.color}` }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-24 px-8">
            {LOGOS.map((logo) => (
              <div
                key={`${logo.id}-duplicate`}
                className="flex h-24 w-48 items-center justify-center rounded-lg bg-white"
                style={{ border: `2px solid ${logo.color}` }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
