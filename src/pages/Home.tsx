import { useEffect, useRef } from "react";
import Button from "../components/Buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Ticker from "../components/Ticker";
// import BentoGrid from "../components/Bento";
import ProfilesTicker from "../components/ProfilesTicker";
import FAQ from "../components/FAQ";
import FlyingPaths from "../components/MapAnim2";
// import Accordions from "../components/FAQ2";
// import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const svgLineRef = useRef(null);
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const svgLineRef1 = useRef(null);

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
    gsap.fromTo(
      svgLineRef1.current,
      {
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: "top 70%", // Animation starts when the top of the section is 70% from the top of viewport
          end: "bottom 50%", // Animation ends when the bottom of the section is 20% from the top of viewport
          scrub: true, // Smooth scrubbing effect tied to scroll position
          // markers: true, // Uncomment for debugging
        },
      },
    );
    gsap.to(
      ".bigimg1",

      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".bigimg1",
          start: "top 90%", // Animation starts when the top of the section is 70% from the top of viewport
          end: "bottom 90%", // Animation ends when the bottom of the section is 20% from the top of viewport
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
            {/* <Button className="mt-10" variant="outline">
              Read More
            </Button> */}
          </div>
        </div>
      </section>

      {/*Bento Grid */}
      {/* <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <BentoGrid />
      </div> */}

      {/* 2nd Section */}
      <section className="relative flex w-full overflow-hidden px-10 py-24">
        <div className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-4 text-center text-5xl text-black">
          <h2>
            A construction <span className="text-orange-500">company,</span>{" "}
            <br /> offering integrated{" "}
            <span className="text-orange-500">solution </span>
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
          <Button className="mt-10" variant="primary">
            Read More
          </Button>
        </div>
        {/* Middle Divider (Thin Line) */}
        <div className="relative w-[2px] bg-black/10">
          {/* SVG Line (Perfectly Centered on Divider) */}
          <svg
            className="scrolling-border absolute top-0 left-0 h-full w-full text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              ref={svgLineRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </div>
        {/* Right Section (Image) */}
        <div className="right relative flex h-[500px] w-full items-center justify-center px-10">
          {/* <img
            src="/map.svg"
            alt="map"
            className="fly-path h-full w-full object-contain"
          /> */}
          <FlyingPaths />
        </div>
      </section>

      <section className="num-container font-NHD flex w-full items-center justify-center px-10 py-20">
        <div className="flex w-full gap-10">
          {/* Card 1 */}
          <div className="num flex-1 rounded-md border-1 border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter1">0</span>
              <span className="ml-1">%</span>
            </h3>{" "}
            <p className="mt-4 opacity-40"> Metals recovery </p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="num flex-1 rounded-md border-1 border-black/10 p-6">
            <h3 className="counter2 text-6xl text-black">0</h3>
            <p className="mt-4 opacity-40"> Years of experience </p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="num flex-1 rounded-md border-1 border-black/10 p-6">
            <h3 className="text-6xl text-black tabular-nums">
              <span className="counter3">0</span>
              <span className="ml-1">+</span>
            </h3>{" "}
            <p className="mt-4 opacity-40"> Projects </p>
            <p className="mt-2 w-1/2 text-base/5 text-black">
              On average, we recover 95% of key battery elements and supply raw
              materials back to U.S. battery manufacturers.
            </p>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef1}
        className="font-NHD relative flex w-full overflow-hidden px-10 py-20"
      >
        {/* Left Section (Image) */}
        <div className="right relative flex h-[500px] w-full items-center justify-center px-10">
          <img
            src="/chart.png"
            alt="map"
            className="max-h-full object-contain"
          />
        </div>

        {/* Middle Divider (Thin Line) */}
        <div className="relative w-[2px] bg-black/10">
          {/* SVG Line (Perfectly Centered on Divider) */}
          <svg
            className="scrolling-border absolute top-0 left-0 h-full w-full text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              ref={svgLineRef1}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </div>
        {/* Right Section (Text) */}
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
      </section>

      {/* <Ticker /> */}

      {/* Big img 1 */}
      <section className="bigimg1 relative flex h-screen w-full scale-75 text-orange-500">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute inset-0 -z-1">
          <img
            src="https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full items-center justify-center px-10 py-24">
          <div className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-4 text-center text-5xl text-white">
            <h2>
              A construction <span className="text-orange-500">company,</span>
              <br /> offering integrated{" "}
              <span className="text-orange-500">solution</span> and related
              services.
            </h2>
          </div>
        </div>
      </section>

      <section className="relative flex w-full overflow-hidden px-10 py-24">
        <div className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-4 text-center text-5xl text-black">
          <h2>
            A construction <span className="text-orange-500">company,</span>{" "}
            <br /> offering integrated{" "}
            <span className="text-orange-500">solution </span>
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
      {/* Cards */}
      <section className="relative flex w-full overflow-hidden bg-white px-10 pt-24">
        <div className="flex h-[500px] w-full gap-4">
          <div className="font-NHD flex flex-1 flex-col justify-between rounded-md px-10 py-14">
            <div className="">
              <h6>WHO WE ARE</h6>

              <h4 className="mt-2 text-lg text-orange-500">
                Operation & Maintenance
              </h4>
              <p className="mt-8 text-lg text-gray-500">
                We emphasize on a broad spectrum of services, competences,
                processes and tools to assure the built environment will perform
                the functions for which a facility was designed and constructed.
              </p>
            </div>
          </div>
          <div className="font-NHD flex flex-1 flex-col justify-between rounded-md border-1 border-black/10 px-10 py-14">
            <div className="flex flex-col">
              <img
                src="your-image-url.jpg"
                alt="Card Image"
                className="h-40 w-full rounded-t-md object-cover"
              />
              <h3 className="mt-2 text-4xl">Card Title</h3>
            </div>

            <div className="">
              <h4 className="text-lg text-orange-500">
                Operation & Maintenance
              </h4>
              <p className="mt-8 text-lg text-gray-500">
                We emphasize on a broad spectrum of services, competences,
                processes and tools to assure the built environment will perform
                the functions for which a facility was designed and constructed.
              </p>
            </div>
          </div>
          <div className="font-NHD flex flex-1 flex-col justify-between rounded-md border-1 border-black/10 px-10 py-14">
            <div className="flex flex-col">
              <img
                src="/truck.png"
                alt="Card Image"
                className="h-60 w-full rounded-t-md object-cover"
              />
              <h3 className="mt-4 text-4xl">Card Title</h3>
            </div>

            <div className="">
              <h4 className="text-lg text-orange-500">
                Operation & Maintenance
              </h4>
              <p className="mt-8 text-lg text-gray-500">
                We emphasize on a broad spectrum of services, competences,
                processes and tools to assure the built environment will perform
                the functions for which a facility was designed and constructed.
              </p>
            </div>
          </div>{" "}
        </div>
      </section>
      <section className="relative flex w-full overflow-hidden px-10 pt-4 pb-24">
        <div className="flex h-[500px] w-full gap-4">
          <div className="font-NHD flex flex-1 flex-col justify-between rounded-md border-1 border-black/10 px-10 py-14">
            <div className="flex flex-col">
              <img
                src="your-image-url.jpg"
                alt="Card Image"
                className="h-40 w-full rounded-t-md object-cover"
              />
              <h3 className="mt-2 text-4xl">Card Title</h3>
            </div>

            <div className="">
              <h4 className="text-lg text-orange-500">
                Operation & Maintenance
              </h4>
              <p className="mt-8 text-lg text-gray-500">
                We emphasize on a broad spectrum of services, competences,
                processes and tools to assure the built environment will perform
                the functions for which a facility was designed and constructed.
              </p>
            </div>
          </div>
          <div className="font-NHD flex flex-1 flex-col justify-between rounded-md border-1 border-black/10 px-10 py-14">
            <div className="flex flex-col">
              <img
                src="your-image-url.jpg"
                alt="Card Image"
                className="h-40 w-full rounded-t-md object-cover"
              />
              <h3 className="mt-2 text-4xl">Card Title</h3>
            </div>

            <div className="">
              <h4 className="text-lg text-orange-500">
                Operation & Maintenance
              </h4>
              <p className="mt-8 text-lg text-gray-500">
                We emphasize on a broad spectrum of services, competences,
                processes and tools to assure the built environment will perform
                the functions for which a facility was designed and constructed.
              </p>
            </div>
          </div>
          <div className="font-NHD flex flex-1 flex-col justify-between rounded-md border-1 border-black/10 px-10 py-14">
            <div className="flex flex-col">
              <img
                src="your-image-url.jpg"
                alt="Card Image"
                className="h-40 w-full rounded-t-md object-cover"
              />
              <h3 className="mt-2 text-4xl">Card Title</h3>
            </div>

            <div className="">
              <h4 className="text-lg text-orange-500">
                Operation & Maintenance
              </h4>
              <p className="mt-8 text-lg text-gray-500">
                We emphasize on a broad spectrum of services, competences,
                processes and tools to assure the built environment will perform
                the functions for which a facility was designed and constructed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="font-NHD relative -mt-18 h-[100svh] w-full overflow-hidden bg-black"></section>

      <section className="relative flex w-full overflow-hidden px-10 pt-24 pb-24">
        <div className="flex w-full flex-col gap-4 text-black">
          <h2>Discover our team</h2>
          <p className="mt-24 w-1/2 text-base">
            COAN's professional employees play an integral role in successfully
            delivering some of the largest and most complex construction
            engineering projects in Africa.
          </p>
        </div>
        <div className="flex w-full flex-col items-end justify-end gap-4 text-black">
          <Button className="mt-10" variant="primary">
            Read More
          </Button>
        </div>
      </section>

      <ProfilesTicker />

      <section className="font-NHD relative h-[100svh] w-full overflow-hidden">
        <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Text Container */}
          <div className="absolute bottom-12 left-0 z-10 w-full px-10 text-white md:w-8/12">
            <h1 className="text-7xl">
              Building the Future with Precision & Expertise.
            </h1>
            {/* <p className="mt-4 w-1/2 text-lg">
              COAN West Africa Limited delivers top-tier construction <br />
              and engineering solutions.
            </p> */}
            {/* <Button className="mt-10" variant="outline">
              Read More
            </Button> */}
          </div>
        </div>
      </section>
      <FAQ />
      {/* <Accordions /> */}

      {/* <section className="h-screen w-full">
        <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"></div>
      </section> */}
    </>
  );
};

export default Home;
