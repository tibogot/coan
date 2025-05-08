import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const overlayRef = useRef(null);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  // Set up scroll tracking to detect direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only trigger hide/show after scrolling a certain amount (10px)
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.set(overlayRef.current, { xPercent: -100 });

    ScrollTrigger.create({
      trigger: ".secondsection",
      start: "top top",
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    });
  }, []);

  useGSAP(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: hidden ? "-100%" : "0%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hidden]);

  const toggleMenu = () => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.to(overlay, {
      xPercent: isOpen ? -100 : 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 z-[9999] flex h-18 w-full items-center px-10 transition-colors duration-500 select-none ${
          scrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex h-16 items-center">
            <img
              src="/logo3.svg"
              alt="Company Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-6 text-base">
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
              <Link to="/about" className="hover:text-orange-500">
                About
              </Link>
              <Link to="/services" className="hover:text-orange-500">
                Services
              </Link>
              <Link to="/gallery" className="hover:text-orange-500">
                Gallery
              </Link>
            </div>

            <div
              className={`ml-4 flex-shrink-0 rounded-md px-4 py-1.5 ${
                scrolled ? "bg-black/10 text-black" : "bg-white/10 text-white"
              }`}
            >
              <Link to="/contact" className="text-base">
                Contact
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="group flex flex-col gap-[7px] focus:outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[2px] w-7 transition-all duration-300 ${
                isOpen ? "translate-y-[9px] -rotate-45" : ""
              } ${scrolled ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`h-[2px] w-7 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              } ${scrolled ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`h-[2px] w-7 transition-all duration-300 ${
                isOpen ? "-translate-y-[9px] rotate-45" : ""
              } ${scrolled ? "bg-black" : "bg-white"}`}
            />
          </button>
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="bg-opacity-95 fixed inset-0 z-40 flex bg-black md:hidden"
      >
        <div className="w-1/2 bg-white px-20 py-32">
          <div className="flex flex-col space-y-8 text-3xl">
            <Link to="/" className="hover:text-gray-600" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
