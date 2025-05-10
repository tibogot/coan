import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

//@ts-ignore
const Card = ({ title, copy, index }) => {
  // Apply different background colors based on card index
  const cardBgColors = [
    "bg-purple-200", // #c3abff equivalent
    "bg-white", // #ffff equivalent
    "bg-yellow-300", // #fed35b equivalent
    "bg-blue-200", // Light blue
    "bg-green-200", // Light green
    "bg-gray-900 text-white", // #1e1e1e with white text
  ];

  return (
    <div className="card relative w-full" id={`card-${index + 1}`}>
      <div className={`card-inner relative w-full p-8 ${cardBgColors[index]}`}>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="card-content flex-grow md:w-2/3">
            <h1 className="mb-4 text-2xl font-bold">{title}</h1>
            <p>{copy}</p>
          </div>
          <div className="card-img aspect-video overflow-hidden rounded-xl md:w-1/3">
            <img
              src="./truck.png"
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
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
    {
      title: "Marketing Strategy",
      copy: "Crafting compelling narratives that connect with your audience",
    },
    {
      title: "Customer Experience",
      copy: "Creating memorable interactions that build long-term loyalty",
    },
    {
      title: "Growth & Innovation",
      copy: "Scaling your brand while maintaining authenticity and purpose",
    },
  ];
  //@ts-ignore
  const container = useRef();

  useGSAP(
    () => {
      // Clear any existing ScrollTriggers to prevent duplication
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const cards = gsap.utils.toArray(".card");

      // Pin the intro section between first card and last card
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

      // Set up each card
      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        //@ts-ignore

        const cardInner = card.querySelector(".card-inner");

        if (!isLastCard) {
          // Create pin for each card except the last one
          ScrollTrigger.create({
            //@ts-ignore

            trigger: card,
            start: "top 35%",
            endTrigger: ".outro", // Pin until outro section
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          // Animate card inner element
          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 10}vh`, // Slightly adjusted multiplier for more cards
            ease: "none",
            scrollTrigger: {
              //@ts-ignore

              trigger: card,
              start: "top 35%",
              endTrigger: ".outro",
              end: "top 65%",
              scrub: true, // Smooth scrubbing
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

    <div className="overflow-x-hidden" ref={container}>
      <section className="hero relative h-screen w-full p-0">
        <img src="./truck.png" alt="" className="h-full w-full object-cover" />
      </section>

      <section className="intro relative flex h-screen w-full items-center bg-gray-100 p-8">
        <h1 className="max-w-4xl text-3xl font-bold">
          Creating standout brands for startups that bring joy and leave lasting
          impressions.
        </h1>
      </section>

      <section className="cards relative">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </section>

      <section className="outro relative flex h-screen w-full items-center bg-red-300 p-8">
        <h1 className="max-w-4xl text-3xl font-bold">
          Creating standout brands for startups that bring joy and leave lasting
          impressions.
        </h1>
      </section>
    </div>
  );
}
