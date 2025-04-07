import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+800px)]">
        <footer className="sticky top-[calc(100vh-800px)] h-[800px] bg-[#0F0F0F] px-10 py-12 text-white">
          {/* Newsletter Signup */}
          <div className="flex flex-col py-10 md:flex-row md:justify-between">
            {/* Left Block - Text */}
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
                Sign up to our newsletter for
                <br />
                guidance, support and promotions.
              </h2>
            </div>

            {/* Right Block - Form + Icons */}
            <div className="md:w-1/3">
              {/* Input and Button side-by-side */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full rounded-md bg-[#1F1F1F] px-4 py-3 text-white md:w-auto md:flex-1"
                />
                <button className="rounded-md bg-white px-6 py-3 text-black transition hover:bg-gray-300">
                  Submit
                </button>
              </div>

              {/* Social Icons below */}
              <div className="mt-10 flex gap-4">
                <div className="cursor-pointer rounded-md bg-[#1F1F1F] p-3 transition hover:bg-gray-700">
                  <FacebookLogo
                    size={24}
                    className="text-white hover:text-gray-400"
                  />
                </div>
                <div className="cursor-pointer rounded-md bg-[#1F1F1F] p-3 transition hover:bg-gray-700">
                  <TiktokLogo
                    size={24}
                    className="text-white hover:text-gray-400"
                  />
                </div>
                <div className="cursor-pointer rounded-md bg-[#1F1F1F] p-3 transition hover:bg-gray-700">
                  <InstagramLogo
                    size={24}
                    className="text-white hover:text-gray-400"
                  />
                </div>
                <div className="cursor-pointer rounded-md bg-[#1F1F1F] p-3 transition hover:bg-gray-700">
                  <YoutubeLogo
                    size={24}
                    className="text-white hover:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Gray line */}
          <hr className="mt-20 border-gray-700" />
          {/* Link Section with Flexbox */}
          <div className="mt-10 flex flex-wrap gap-10 text-sm md:flex-nowrap md:justify-between">
            {/* Support Section */}
            <div className="w-full md:w-1/4">
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#">Contact us</Link>
                </li>
                <li>
                  <Link to="#">Delivery & returns</Link>
                </li>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
                <li>
                  <Link to="#">Gift cards</Link>
                </li>
                <li>
                  <Link to="#">Klarna</Link>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="w-full md:w-1/4">
              <h4 className="mb-4 font-semibold">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#">Stores</Link>
                </li>
                <li>
                  <Link to="#">Appointments</Link>
                </li>
                <li>
                  <Link to="#">Ski workshop</Link>
                </li>
                <li>
                  <Link to="#">Demo</Link>
                </li>
                <li>
                  <Link to="#">Equipment hire</Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div className="w-full md:w-1/4">
              <h4 className="mb-4 font-semibold">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Heritage</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Affiliate programme</Link>
                </li>
              </ul>
            </div>

            {/* Partners Section */}
            <div className="w-full md:w-1/4">
              <h4 className="mb-4 font-semibold">Partners</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#">The Snowboard Asylum</Link>
                </li>
                <li>
                  <Link to="#">Outsiders Store</Link>
                </li>
                <li>
                  <Link to="#">Our partners</Link>
                </li>
                <li>
                  <Link to="#">Charities we support</Link>
                </li>
              </ul>
            </div>

            {/* New Section with Images and Text Below (Inline with others) */}
            <div className="flex w-full flex-col items-start bg-amber-200 md:w-2/4">
              <div className="flex w-full">
                <img
                  src="chart.png"
                  alt="Image 1"
                  className="h-full w-1/2 object-cover"
                />
                <img
                  src="bg-hero.jpg"
                  alt="Image 2"
                  className="h-full w-1/2 object-cover"
                />
              </div>
              <p className="text-center text-sm">Some text below the images</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute right-10 bottom-10 left-10 mt-12 flex justify-between border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            {" "}
            <p>
              &copy; {new Date().getFullYear()} COAN West Africa Limited. All
              Rights Reserved
            </p>
            <div className="flex gap-6">
              <p className="cursor-pointer hover:text-white">
                Terms & conditions
              </p>
              <p className="cursor-pointer hover:text-white">
                Privacy & cookies
              </p>
              <p className="cursor-pointer hover:text-white">
                Cookie declaration
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
