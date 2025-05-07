import { useState, useRef, useEffect } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { gsap } from "gsap";
import Copy from "./Copy4";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What types of construction projects do you specialize in?",
    answer:
      "We specialize in a wide range of construction projects including commercial buildings, industrial facilities, infrastructure development, and residential complexes. Our expertise spans across civil, electrical, and mechanical engineering services.",
  },
  {
    id: 2,
    question: "How do you ensure project quality and safety?",
    answer:
      "We maintain strict quality control measures and follow international safety standards. Our team conducts regular inspections, implements comprehensive safety protocols, and uses advanced construction methodologies to ensure the highest quality results.",
  },
  {
    id: 3,
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. We provide detailed project schedules during the initial consultation, incorporating realistic milestones and efficient resource allocation to ensure timely completion.",
  },
  {
    id: 4,
    question: "Do you handle permits and regulatory compliance?",
    answer:
      "Yes, we manage all aspects of permitting and ensure full compliance with local and national regulations. Our team stays updated with construction codes and works closely with regulatory bodies throughout the project lifecycle.",
  },
  {
    id: 5,
    question: "What sustainable construction practices do you employ?",
    answer:
      "We implement eco-friendly construction methods, use sustainable materials when possible, and focus on energy-efficient designs. Our approach includes waste reduction, renewable energy integration, and green building certifications.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    faqData.forEach((item, index) => {
      const content = contentRefs.current[index];
      const wrapper = contentWrapperRefs.current[index];
      if (!content || !wrapper) return;

      // Store the actual height for animation
      const height = content.offsetHeight;

      // GSAP animation
      if (activeId === item.id) {
        // First set height to 0 and visibility to ensure clean animation start
        gsap.set(wrapper, { height: 0, visibility: "visible" });

        // Then animate to the calculated height
        gsap.to(wrapper, {
          height: height,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            // Optional: set to auto after animation completes for responsive behavior
            gsap.set(wrapper, { height: "auto" });
          },
        });
      } else {
        // If it's currently auto height, first set it to its actual pixel height
        if (wrapper.style.height === "auto") {
          gsap.set(wrapper, { height: height });
        }

        // Then animate to 0
        gsap.to(wrapper, {
          height: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(wrapper, { visibility: "hidden" });
          },
        });
      }
    });
  }, [activeId]);

  return (
    <div className="mx-auto px-10 py-40">
      <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2">
          <Copy>
            <p className="text-lg text-orange-500">We're here to help.</p>

            <h2 className="mt-10 font-bold text-black">Got Questions?</h2>
          </Copy>
        </div>

        {/* Right Section - FAQ */}
        <div className="space-y-4 md:w-1/2">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <button
                className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left select-none"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={activeId === item.id}
                aria-controls={`content-${item.id}`}
              >
                <span className="text-lg font-medium text-gray-900 select-none">
                  {" "}
                  {item.question}
                </span>
                <CaretDown
                  size={24}
                  className={`transform text-orange-500 transition-transform duration-300 ${
                    activeId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                ref={(el) => {
                  contentWrapperRefs.current[index] = el;
                }}
                id={`content-${item.id}`}
                className="overflow-hidden"
                style={{
                  height: 0,
                  visibility: "hidden",
                }}
              >
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 select-none"> {item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
