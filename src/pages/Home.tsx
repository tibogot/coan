import { useEffect, useRef } from "react";
import Button from "../components/Buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ticker from "../components/Ticker";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const svgLineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Make sure the DOM elements are available
    if (!svgLineRef.current || !sectionRef.current) return;
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
        },
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
      });
    });

    // Create the animation for the SVG line
    gsap.fromTo(
      svgLineRef.current,
      {
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // Animation starts when the top of the section is 70% from the top of viewport
          end: "bottom 50%", // Animation ends when the bottom of the section is 20% from the top of viewport
          scrub: true, // Smooth scrubbing effect tied to scroll position
          // markers: true, // Uncomment for debugging
        },
      },
    );

    // Clean up the animation when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="font-NHD relative -mt-18 h-[100svh] w-full overflow-hidden">
        <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1583024011792-b165975b52f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Text Container */}
          <div className="absolute bottom-12 left-0 z-10 w-full px-10 text-white md:w-8/12">
            <h1 className="text-7xl">
              Building the Future with Precision & Expertise.
            </h1>
            <p className="mt-4 w-1/2 text-lg">
              COAN West Africa Limited delivers top-tier construction <br />
              and engineering solutions.
            </p>
            <Button className="mt-10" variant="outline">
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="relative flex w-full overflow-hidden px-10 py-24">
        <div className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-4 text-center text-5xl text-black">
          <h2>
            A construction <span className="text-orange-400">company,</span>{" "}
            <br /> offering integrated{" "}
            <span className="text-orange-400">solution </span>
            and related services.
          </h2>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="font-NHD relative flex w-full overflow-hidden px-10 py-20"
      >
        {/* Left Section (Text) */}
        <div className="left flex w-full flex-col gap-4 p-10 text-black">
          <h6>WHO WE ARE</h6>
          <p className="mt-4 w-3/4 text-xl">
            COAN West Africa Limited is a construction company offering
            integrated solutions and related services. COAN is known for
            executing complex engineering solutions that require the highest
            level of technical expertise, be it Civil, Electrical, and
            Mechanical Engineering Services.
          </p>
          <p className="w-3/4 text-xl">
            COAN West Africa Limited is a construction company offering
            integrated solutions and related services. COAN is known for
            executing complex engineering solutions that require the highest
            level of technical expertise, be it Civil, Electrical, and
            Mechanical Engineering Services.
          </p>
        </div>
        {/* Middle Divider (Thin Line) */}
        <div className="relative w-[2px] bg-black/10">
          {/* SVG Line (Perfectly Centered on Divider) */}
          <svg
            className="scrolling-border absolute top-0 left-0 h-full w-full text-orange-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              ref={svgLineRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        {/* Right Section (Image) */}
        <div className="right relative flex h-[500px] w-full items-center justify-center px-10">
          <img
            src="/map.webp"
            alt="map"
            className="max-h-full object-contain"
          />
        </div>
      </section>

      <section className="num-container font-NHD flex w-full items-center justify-center px-10 py-20">
        <div className="flex w-full gap-10">
          {/* Card 1 */}
          <div className="num flex-1 rounded-2xl border-1 border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter1">0</span>
              <span className="ml-1">%</span>
            </h3>{" "}
            <p className="mt-4 opacity-40"> Metals recovery </p>
            <p className="mt-0 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="num flex-1 rounded-2xl border-1 border-black/10 p-6">
            <h3 className="counter2 text-6xl text-black">0</h3>
            <p className="mt-2"> Years of experience </p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="num flex-1 rounded-2xl border-1 border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter3">0</span>
              <span className="ml-1">+</span>
            </h3>{" "}
            <p className="mt-2"> Projects </p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>
        </div>
      </section>

      <Ticker />
      <section className="flex h-screen w-full text-orange-400">
        <div className="flex w-1/2 items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <section className="relative flex w-full overflow-hidden px-10 py-24">
        <div className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-4 text-center text-5xl text-black">
          <h2>
            A construction <span className="text-orange-400">company,</span>{" "}
            <br /> offering integrated{" "}
            <span className="text-orange-400">solution </span>
            and related services.
          </h2>
          <p className="mt-2 w-1/2 text-base/5 text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            repellendus a quaerat veniam culpa quod facere quasi mollitia
            distinctio quos delectus error, voluptatum eaque reprehenderit
            officia iusto at molestiae recusandae.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
