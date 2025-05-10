// import { useEffect } from "react";
import Button from "../components/Buttons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ticker from "../components/Ticker";
import ProfilesTicker from "../components/ProfilesTicker2";
import FAQ from "../components/FAQ";
import Counter from "../components/Counter";
import Copy from "../components/Copy1";
import GridComponent from "../components/GridComponent2";
import HomeCard from "../components/CardsScroll4";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  //   useGSAP(() => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     ScrollTrigger.clearMatchMedia();

  //     const cards = gsap.utils.toArray(".card");

  //     // let tl = gsap.timeline();
  //     const tl2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".bigimg-wrapper",
  //         start: "top top",
  //         end: "+=2000", // Total scroll length
  //         scrub: true,
  //         pin: true,
  //         anticipatePin: 1,
  //       },
  //     });

  //     gsap.to(".section1", {
  //       scale: 1,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".section1",
  //         start: "top 90%", // Animation starts when the top of the section is 70% from the top of viewport
  //         end: "bottom 90%", // Animation ends when the bottom of the section is 20% from the top of viewport
  //         scrub: true, // Smooth scrubbing effect tied to scroll position
  //         // markers: true, // Uncomment for debugging
  //       },
  //     });

  //     tl2.to(
  //       ".section2",
  //       {
  //         clipPath: "inset(0% 0% 0% 0%)",
  //         ease: "power1.out",
  //       },
  //       "<",
  //     ); // "<" means start at the same time as previous if needed or stagger slightly if you want overlap

  //     // Reveal section 3
  //     tl2.to(".section3", {
  //       clipPath: "inset(0% 0% 0% 0%)",
  //       ease: "power1.out",
  //     });
  //     ScrollTrigger.create({
  //       //@ts-ignore
  //       trigger: cards[0],
  //       start: "top 35%",
  //       //@ts-ignore
  //       endTrigger: cards[cards.length - 1],
  //       end: "top 30%",
  //       pin: ".intro",
  //       pinSpacing: false,
  //       // markers: true,
  //     });

  //     cards.forEach((card, index) => {
  //       const isLastCard = index === cards.length - 1;
  //       //@ts-ignore
  //       const cardInner = card.querySelector(".card-inner");

  //       if (!isLastCard) {
  //         ScrollTrigger.create({
  //           //@ts-ignore
  //           trigger: card,
  //           start: "top 35%",
  //           endTrigger: ".outro",
  //           end: "top 65%",
  //           pin: true,
  //           pinSpacing: false,
  //         });

  //         gsap.to(cardInner, {
  //           y: `-${(cards.length - index) * 14}vh`,
  //           ease: "none",
  //           scrollTrigger: {
  //             //@ts-ignore
  //             trigger: card,
  //             start: "top 35%",
  //             endTrigger: ".outro",
  //             end: "top 65%",
  //             scrub: true,
  //             // markers: true,
  //           },
  //         });
  //       }
  //     });

  //     // Clean up the animation when component unmounts
  //     return () => {
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //       ScrollTrigger.clearMatchMedia();
  //       tl2.kill();
  //       gsap.killTweensOf(".section1");
  //       cards.forEach((card) => {
  //         //@ts-ignore
  //         const cardInner = card.querySelector(".card-inner");
  //         gsap.killTweensOf(cardInner);
  //       });
  //       gsap.globalTimeline.clear();
  //     };
  //   }, []);
  return (
    <>
      <div className="wrapper font-NHD">
        {/* Splash */}
        {/* <div className="splash absolute top-0 left-0 z-[99999] flex h-screen w-full items-center justify-center bg-black select-none">
          <img src="./logo.svg" alt="" className="w-1/3" />
        </div> */}
        {/* Hero Section */}
        <section className="hero relative -mt-18 h-[100svh] w-full overflow-hidden text-white">
          {/* Background Image Layer (Animated) */}
          <div
            className="bgimg2 absolute inset-0 z-0 scale-100 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bgimg2.webp')" }}
          />

          {/* Content Layer */}
          <div className="relative z-10 flex h-full items-center">
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

        <div className="secondsection px-10 pt-10 pb-30">
          {/* <Copy delay={0.0}> */}
          <h4>About us</h4>
          {/* </Copy> */}

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
            <Copy>
              <div className="w-1/2">
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
              </div>
            </Copy>
          </div>
        </div>

        <Counter />

        <Ticker />

        {/* Big img 1 */}
        <div className="p-0">
          <section className="bigimg-wrapper relative h-screen w-full overflow-hidden">
            {/* Section 1 (top) */}
            <div className="section1 absolute inset-0 z-30 origin-center scale-75">
              <img
                src="./5V6A0113-scaled.jpg"
                alt="Section 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 px-4 text-center text-5xl text-white">
                <h2>
                  A construction{" "}
                  <span className="text-orange-500">company</span>
                  <br /> offering integrated{" "}
                  <span className="text-orange-500">solution</span>
                </h2>
              </div>
            </div>

            {/* Section 2 (middle) */}
            <div
              className="section2 absolute inset-0 z-40"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="./5V6A0592-scaled.jpg"
                alt="Section 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 px-4 text-center text-5xl text-white">
                <h2>
                  Innovative{" "}
                  <span className="text-orange-500">engineering</span>
                  <br /> solutions
                </h2>
              </div>
            </div>

            {/* Section 3 (bottom) */}
            <div
              className="section3 absolute inset-0 z-50"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="./20210304_102705-2-scaled.jpg"
                alt="Section 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 px-4 text-center text-5xl text-white">
                <h2>
                  Building the <span className="text-orange-500">future</span>
                  <br /> together
                </h2>
              </div>
            </div>
          </section>
        </div>

        <HomeCard />

        {/* Cards */}

        {/* <StackingCards /> */}

        {/* <section className="font-NHD relative h-[100svh] w-full overflow-hidden bg-black"></section> */}

        <div className="flex w-full bg-black py-20 text-white">
          <GridComponent />
          <div className="flex w-1/2 flex-col items-start justify-center p-20">
            <Copy>
              <h2>
                A construction <span className="text-orange-500">company,</span>
                <br /> offering integrated{" "}
                <span className="text-orange-500">solution</span> and related
                services.
              </h2>{" "}
              <p className="mt-10 w-1/2 text-base">
                COAN's professional employees play an integral role in
                successfully delivering.
              </p>
            </Copy>
          </div>
        </div>
        <section className="font-NHD relative flex h-[100svh] w-full overflow-hidden bg-black px-10 py-30 text-white">
          <div className="left w-1/2">
            <Copy delay={0.0}>
              <h4>About us</h4>
            </Copy>

            <Copy>
              <h2 className="mt-4 w-3/4">
                A construction company,
                <br />
                offering integrated solution and
                <br />
                related services.
              </h2>
            </Copy>
            <Copy>
              <p className="mt-10 w-7/8 text-xl">
                MIMCO est un groupe d'investissement spécialisé dans
                l'immobilier value add paneuropéen.
                <br />
                Le groupe structure et gère des véhicules d'investissement
                innovants au service d'une clientèle institutionnelle ainsi que
                de family offices et banques privées.
                <br />
              </p>
            </Copy>
          </div>
          <div className="right flex w-1/2 justify-end select-none">
            <img
              src="./bgimg2.webp"
              alt=""
              className="sideimg1 h-[650px] w-[550px] object-cover"
              // style={{ clipPath: "inset(0 0 100% 0)" }}
            />
          </div>
        </section>

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

        <ProfilesTicker />

        {/* <ProfilesTickerR /> */}

        <FAQ />

        <section className="font-NHD relative h-[100svh] w-full overflow-hidden">
          <div className="relative flex h-full items-center justify-center bg-[url('https://images.unsplash.com/photo-1710582307396-5ca7b4390aa8?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
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
            <div className="absolute top-20 left-10 z-10 flex w-full justify-start px-10 text-white">
              <Copy>
                <h1 className="text-3xl">
                  Building the Future with Precision
                  <br />& Expertise.
                </h1>
              </Copy>
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
