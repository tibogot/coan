import { useEffect } from "react";
import Button from "../components/Buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Ticker from "../components/Ticker";
// import BentoGrid from "../components/Bento";
import ProfilesTicker from "../components/ProfilesTicker2";
// import ProfilesTickerR from "../components/ProfilesTickerR";
import FAQ from "../components/FAQ";
import Counter from "../components/Counter";
import Copy from "../components/Copy3";
// import GridComponent from "../components/GridBalls";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(
      ".splash",

      {
        delay: 1,
        y: "-100%",
        ease: "power4.inOut",
        duration: "1",
      },
    ).to(".bgimg2", {
      scale: 1,
    });
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
      <div className="wrapper font-NHD">
        {/* Splash */}
        <div className="splash absolute top-0 left-0 z-[99999] flex h-screen w-full items-center justify-center bg-black select-none">
          <img src="./logo.svg" alt="" className="w-1/3" />
        </div>
        {/* Hero Section */}
        <section className="relative -mt-18 h-[100svh] w-full overflow-hidden text-white">
          <div className="bgimg2 relative flex h-full items-center bg-[url('/bgimg2.webp')] bg-cover bg-center bg-no-repeat">
            {/* Text Container */}

            <div className="flex flex-col px-10 select-none">
              <div className="logobig w-200 pb-8">
                <img src="./logo2.svg" alt="" />
              </div>
              <p className="mx-2 text-xl">Construction Company West Africa</p>
            </div>
          </div>
        </section>

        {/* 2nd Section  */}

        {/* <SecondSection /> */}

        <div className="section px-10 pt-10 pb-30">
          <Copy delay={0.0}>
            <h4>About us</h4>
          </Copy>

          <Copy>
            <h2 className="mt-4 w-3/4">
              A construction <span className="text-orange-400">company,</span>
              <br />
              offering integrated solution and
              <br />
              related
              <span className="text-orange-400"> services.</span>
            </h2>
          </Copy>
          <div className="mt-30 flex">
            <div className="w-1/2">
              <Copy>
                <h3 className="w-1/2 text-4xl">
                  Over 18 years grinding alongside founders with a chip
                </h3>
              </Copy>
            </div>

            <div className="w-1/2">
              <Copy>
                <p className="w-7/8 text-xl">
                  MIMCO est un groupe d'investissement spécialisé dans
                  l'immobilier value add paneuropéen.
                  <br />
                  Le groupe structure et gère des véhicules d'investissement
                  innovants au service d'une clientèle institutionnelle ainsi
                  que de family offices et banques privées.
                  <br />
                  <br />
                  Fort d'une expertise pointue en structuration financière,
                  MIMCO déploie une gamme complète de solutions — de la création
                  de fonds d'investissement réglementés aux club deals
                  exclusifs, en passant par des produits sur mesure incluant
                  notamment des solutions equity et dette mezzanine.
                </p>
              </Copy>
            </div>
          </div>
        </div>
        <Counter />

        {/* <Ticker /> */}

        {/* Big img 1 */}
        <div className="p-10">
          <section className="bigimg1 relative flex h-screen w-full scale-75 text-orange-500">
            {/* Background Image */}
            <div className="absolute inset-0 rounded-xl bg-black/10"></div>

            <div className="absolute inset-0 -z-1">
              <img
                src="https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex w-full items-center justify-center px-10 py-24">
              <div className="mx-auto flex w-full max-w-3/4 flex-col items-center gap-4 text-center text-5xl text-white">
                <h2>
                  A construction{" "}
                  <span className="text-orange-500">company,</span>
                  <br /> offering integrated{" "}
                  <span className="text-orange-500">solution</span> and related
                  services.
                </h2>
              </div>
            </div>
          </section>
        </div>

        {/* Cards */}

        <section className="font-NHD relative h-[100svh] w-full overflow-hidden bg-black"></section>

        <section className="relative flex w-full overflow-hidden px-10 pt-24 pb-24">
          <div className="flex w-full flex-col gap-4 text-black">
            <Copy>
              <p className="text-lg text-orange-500">We're here to help.</p>
              <h2>Discover our team</h2>
              <p className="mt-24 w-1/2 text-base">
                COAN's professional employees play an integral role in
                successfully delivering some of the largest and most complex
                construction engineering projects in Africa.
              </p>
            </Copy>
          </div>
          <div className="flex w-full flex-col items-end justify-end gap-4 text-black">
            <Button className="mt-10" variant="primary">
              Read More
            </Button>
          </div>
        </section>

        {/* <div className="flex h-screen w-full bg-black text-white">
          <GridComponent />
          <h1>Coan Construction</h1>
        </div> */}

        <ProfilesTicker />

        {/* <ProfilesTickerR /> */}

        <FAQ />

        <section className="font-NHD relative h-[100svh] w-full overflow-hidden">
          <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="w-1/4">
              <img
                src="/logo3.svg"
                alt="Company Logo"
                className="object-contain"
              />
            </div>

            {/* Text Container */}
            <div className="absolute top-12 left-0 z-10 w-full px-10 text-white md:w-8/12">
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
      </div>
    </>
  );
};

export default Home;
