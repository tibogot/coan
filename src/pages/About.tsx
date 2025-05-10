import HomeCard from "../components/CardsScroll3";
import SecondSection from "../components/SecondSection";

const About = () => {
  return (
    <>
      <section className="hero relative -mt-18 h-[100svh] w-full overflow-hidden text-white">
        <div className="h-screen w-full bg-amber-400">About</div>;
      </section>
      <SecondSection />
      <HomeCard />
    </>
  );
};

export default About;
