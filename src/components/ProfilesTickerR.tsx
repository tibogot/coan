import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface ProfileType {
  id: number;
  name: string;
  title: string;
  image: string;
  countries: string[];
}

const PROFILES: ProfileType[] = [
  {
    id: 1,
    name: "Chief Christian Nwogu",
    title: "Chairman",
    image: "/Chairman-scaled-tiny.jpg",
    countries: ["Allemagne", "Luxembourg"],
  },
  {
    id: 2,
    name: "Engr. Chukwudi Nwogu",
    title: "Co-Founder & CEO",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/MD-scaled-e1692892180900.jpg",
    countries: ["Allemagne", "France"],
  },
  {
    id: 3,
    name: "Nonso Nwogwu",
    title: "Director",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/pexels-dellon-thomas-1405963.jpg",
    countries: ["France"],
  },
  {
    id: 4,
    name: "Engr Ralf Jonas",
    title: "CTO",
    image:
      "https://coanwaltd.com/wp-content/uploads/2022/04/pexels-dellon-thomas-2474307.jpg",
    countries: ["USA"],
  },
  {
    id: 5,
    name: "Mr Ugwu Osita Sabastine",
    title: "Accountant",
    image:
      "https://coanwaltd.com/wp-content/uploads/2018/12/Mr-Ugwu-Osita-Sabastine.jpg",
    countries: ["UK"],
  },
];

const ProfilesTicker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const draggableRef = useRef<Draggable | null>(null);
  const isHovering = useRef<boolean>(false);
  const isDragging = useRef<boolean>(false);
  const tickerWidthRef = useRef<number>(0);

  const startAnimationFromPosition = (
    element: HTMLDivElement,
    startX: number,
    width: number,
  ) => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Normalize starting position
    let normalizedX = startX;
    if (normalizedX >= 0) {
      normalizedX = -width;
      gsap.set(element, { x: normalizedX });
    } else if (normalizedX < -width) {
      normalizedX = 0;
      gsap.set(element, { x: normalizedX });
    }

    const progress = Math.abs(normalizedX) / width;
    const remainingDuration = 30 * (1 - progress);

    timelineRef.current = gsap.timeline({ repeat: -1 });

    // Move to the right edge
    timelineRef.current.to(element, {
      x: 0,
      duration: remainingDuration,
      ease: "none",
    });

    // Reset to left again and loop
    timelineRef.current.set(element, { x: -width });
    timelineRef.current.to(element, {
      x: 0,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return timelineRef.current;
  };

  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    const profileElements = tickerElement.querySelectorAll(".profile-card");
    const firstSetProfiles = Array.from(profileElements).slice(
      0,
      PROFILES.length,
    );
    const firstSetWidth = firstSetProfiles.reduce((total, el) => {
      const style = window.getComputedStyle(el);
      const margin =
        parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return total + (el as HTMLElement).offsetWidth + margin;
    }, 0);

    tickerWidthRef.current = firstSetWidth;

    gsap.set(tickerElement, { x: -firstSetWidth });

    timelineRef.current = startAnimationFromPosition(
      tickerElement,
      -firstSetWidth,
      firstSetWidth,
    );

    draggableRef.current = Draggable.create(tickerElement, {
      type: "x",
      inertia: true,
      edgeResistance: 0.65,
      onDragStart: () => {
        isDragging.current = true;
        timelineRef.current?.pause();
      },
      onDrag: function () {
        // Loop logic for rightward ticker
        if (this.x > 0) {
          gsap.set(tickerElement, { x: -firstSetWidth });
          this.update();
        } else if (this.x <= -firstSetWidth) {
          gsap.set(tickerElement, { x: 0 });
          this.update();
        }
      },
      onDragEnd: () => {
        isDragging.current = false;
        if (!isHovering.current && tickerRef.current) {
          const currentX = gsap.getProperty(tickerRef.current, "x") as number;
          startAnimationFromPosition(
            tickerRef.current,
            currentX,
            tickerWidthRef.current,
          );
        }
      },
      onThrowUpdate: function () {
        if (this.x > 0) {
          gsap.set(tickerRef.current, { x: -firstSetWidth });
          this.update();
        } else if (this.x <= -firstSetWidth) {
          gsap.set(tickerRef.current, { x: 0 });
          this.update();
        }
      },
    })[0];

    return () => {
      timelineRef.current?.kill();
      draggableRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    isHovering.current = true;
    timelineRef.current?.pause();
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    if (!isDragging.current && tickerRef.current) {
      const currentX = gsap.getProperty(tickerRef.current, "x") as number;
      startAnimationFromPosition(
        tickerRef.current,
        currentX,
        tickerWidthRef.current,
      );
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-0">
      <div className="inline-flex w-max">
        <div
          ref={tickerRef}
          className="flex cursor-grab"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...PROFILES, ...PROFILES].map((profile, i) => (
            <div
              key={`${i}-${profile.id}`}
              className="profile-card relative m-4 flex h-[650px] w-[450px] flex-col bg-white"
            >
              <div className="absolute top-4 left-4 flex space-x-2">
                {profile.countries.map((country, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <img
                src={profile.image}
                alt={profile.name}
                className="h-[80%] w-full object-cover"
              />
              <div className="mt-2 px-4 pb-4">
                <h3 className="text-xl font-medium">{profile.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{profile.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesTicker;
