import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LOGOS = [
  { id: 1, name: "Brand 1", color: "text-[black]" },
  { id: 2, name: "Brand 2", color: "text-[black]" },
  { id: 3, name: "Brand 3", color: "text-[black]" },
  { id: 4, name: "Brand 4", color: "text-[black]" },
  { id: 5, name: "Brand 5", color: "text-[black]" },
];

const Ticker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    timelineRef.current = gsap.timeline({ repeat: -1 });
    const tickerWidth = tickerElement.offsetWidth;

    timelineRef.current.to(tickerElement, {
      x: -tickerWidth / 2,
      duration: 20,
      ease: "none",
    });

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div className="inline-flex w-max">
        <div ref={tickerRef} className="flex">
          <div className="flex items-center gap-24 px-8">
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className={`flex h-14 w-48 items-center justify-center rounded-lg border-1 border-orange-500 bg-white`}
              >
                <span className={`text-xl ${logo.color}`}>{logo.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-24 px-8">
            {LOGOS.map((logo) => (
              <div
                key={`${logo.id}-duplicate`}
                className={`flex h-14 w-48 items-center justify-center rounded-lg border-1 border-orange-500 bg-white`}
              >
                <span className={`text-xl ${logo.color}`}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
