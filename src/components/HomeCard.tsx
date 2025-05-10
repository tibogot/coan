import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

//@ts-ignore
const Card = ({ title, copy, index }) => {
  return (
    <div className="card" id={`card-${index + 1}`}>
      <div className="card-inner">
        <div className="card-content">
          <h1>{title} </h1>
          <p>{copy} </p>
        </div>
        <div className="card-img">
          <img src="./truck.png" alt={title} />
        </div>
      </div>
    </div>
  );
};

export default function HomeCard() {
  const cards = [
    {
      title: "Brand Foundation",
      copy: "The heart of your company shapes your vision, values and voice",
    },
    {
      title: "Design Identity",
      copy: "The heart of your company shapes your vision, values and voice",
    },
    {
      title: "Digital Presence",
      copy: "The heart of your company shapes your vision, values and voice",
    },
  ];
  //@ts-ignore
  const container = useRef();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card");

      ScrollTrigger.create({
        //@ts-ignore
        trigger: cards[0],
        start: "top 35%",
        //@ts-ignore
        endTrigger: cards[cards.length - 1],
        end: "top 30%",
        pin: ".intro",
        pinSpacing: false,
      });

      cards.forEach((card, index) => {
        const isLastCard = index == cards.length - 1;
        //@ts-ignore

        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard) {
          ScrollTrigger.create({
            //@ts-ignore

            trigger: card,
            start: "top 35%",
            endTrigger: ".outro",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              //@ts-ignore
              trigger: card,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  return (
    //@ts-ignore

    <div className="app" ref={container}>
      <section className="hero">
        <img
          src="./truck.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </section>
      <section className="intro">
        <h1>
          Creating standout brands for startups that bring jpy and leave lasting
          impressions.{" "}
        </h1>
      </section>
      <section className="cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>
      <section className="outro">
        <h1>
          Creating standout brands for startups that bring jpy and leave lasting
          impressions.{" "}
        </h1>
      </section>
    </div>
  );
}
