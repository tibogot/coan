import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLDivElement>(".card");

    items.forEach((item, index) => {
      const offset = item.getAttribute("animation-item") || "10px";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: "top top+=" + offset,
            endTrigger: ".container2",
            end: "top 260",
            pin: true,
            pinSpacing: true,
            scrub: true,
            markers: true, // optional, for debugging
          },
        })
        .to(item, {
          opacity: 0.4,
          scale: 0.85 + 0.02 * index,
          transformOrigin: "center center",
        });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-10 font-sans font-light"
    >
      <h1 className="mb-[80vh] text-4xl">Stacking Cards</h1>

      <div className="container flex pb-[250px]">
        <div className="cards ml-[100px]">
          {[10, 20, 30, 40, 50].map((val, idx) => (
            <div
              key={idx}
              className="card mb-[50px] flex h-[200px] w-[400px] items-center justify-center bg-white text-4xl first:shadow-[0px_0px_30px_3px_rgba(0,0,0,0.05)]"
              animation-item={`${val}px`}
            >
              {idx + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="container2 h-[150vh] w-full border-t border-red-500 pt-10"></div>
    </section>
  );
};

export default StackingCards;
