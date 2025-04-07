import { useEffect } from "react";
import Button from "../components/Buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecondSection from "../components/SecondSection";
// import Ticker from "../components/Ticker";
// import BentoGrid from "../components/Bento";
import ProfilesTicker from "../components/ProfilesTicker";
// import ProfilesTickerR from "../components/ProfilesTickerR";
import FAQ from "../components/FAQ";
// import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
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
        <div className="relative flex h-full items-center bg-[url('https://images.unsplash.com/photo-1583024011792-b165975b52f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
          {/* Text Container */}
          {/* <div className="absolute bottom-12 left-0 z-10 w-full px-10 text-white md:w-8/12">
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
          </div> */}
          {/* Spacer for left half */}
          <div className="w-1/2"></div>
          <div className="z-10 w-1/2 text-white">
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

      {/* <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <BentoGrid />
      </div> */}

      <SecondSection />

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
                src="/truck.png"
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
                src="/truck.png"
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
      <section className="font-NHD relative h-[100svh] w-full overflow-hidden bg-black"></section>

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

      {/* <ProfilesTickerR /> */}

      <FAQ />

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

      {/* <section className="h-screen w-full">
        <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"></div>
      </section> */}
    </>
  );
};

export default Home;
