import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Accordions = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="mx-auto w-full max-w-4xl py-8">
      <ul className="space-y-4">
        {AccordionData.map((e, i) => (
          <Accordion
            key={i}
            id={i}
            title={e.title}
            content={e.content}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </ul>
    </div>
  );
};

const Accordion = ({
  id,
  title,
  content,
  expanded,
  setExpanded,
}: {
  id: number;
  title: string;
  content: string;
  expanded: number | null;
  setExpanded: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      // GSAP animation for accordion
      if (expanded === id) {
        gsap.to(contentRef.current, {
          height: contentRef.current.scrollHeight, // Open the accordion to the full height
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0, // Close the accordion
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    }
  }, [expanded, id]);

  return (
    <li className="rounded-lg border border-gray-200 bg-white shadow-lg">
      <button
        className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-100"
        onClick={() => setExpanded(expanded === id ? null : id)}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${
            expanded === id ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden px-6 py-4 text-gray-600"
        style={{ height: expanded === id ? "auto" : 0 }}
      >
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </li>
  );
};

export default Accordions;

const AccordionData = [
  {
    title: "What is your current stack?",
    content:
      "I am currently working with mostly Javascript, especially Javascript. For frontend I am using React with Emotion and GSAP. For backend I also use Node.js. Although throughout the years I gained some PHP experience too, which means, that I could make something working out of it, but I am not an expert by any means.",
  },
  {
    title: "What is your relationship with the backend?",
    content:
      "I just transitioned myself into a full stack developer, by learning databases - relational and NoSQL - and different approaches to connect them with the frontend. I am pretty enthusiastic about GraphQL.",
  },
  {
    title: "Any other stuff?",
    content:
      "Yeah, I am pretty much into WebGL and other more experimental stuff. I also made a bunch of <em>GLSL</em> coding. This correlates a lot with my interest in creative coding.",
  },
];
