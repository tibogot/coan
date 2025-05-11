import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Counter = () => {
  //@ts-ignore
  const containerRef = useRef();

  useGSAP(() => {
    const counters = [
      { selector: ".counter1", value: 600 },
      { selector: ".counter2", value: 28 },
      { selector: ".counter3", value: 460 },
    ];

    counters.forEach(({ selector, value }) => {
      gsap.to(selector, {
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          //   markers: true,
        },
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Numbers Section */}
      <section
        //@ts-ignore

        ref={containerRef}
        className="num-container font-NHD flex w-full items-center justify-center px-10 py-20"
      >
        <div className="flex w-full gap-10">
          {/* Card 1 */}
          <div className="num flex-1 rounded-md border border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter1">0</span>
              <span className="ml-1">%</span>
            </h3>
            <p className="mt-4 text-orange-500">Metals recovery</p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="num flex-1 rounded-md border border-black/10 p-6">
            <h3 className="counter2 text-6xl text-black">0</h3>
            <p className="mt-4 text-orange-500">Years of experience</p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="num flex-1 rounded-md border border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter3">0</span>
              <span className="ml-1">+</span>
            </h3>
            <p className="mt-4 text-orange-500">Projects</p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
