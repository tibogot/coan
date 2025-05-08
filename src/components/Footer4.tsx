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
        <footer className="sticky top-[calc(100vh-800px)] flex h-[800px] flex-col justify-between bg-[#0F0F0F] px-10 py-12 text-white">
          {/* Top Section */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
              <div className="md:w-1/2">
                <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
                  Sign up to our newsletter for
                  <br />
                  guidance, support and promotions.
                </h2>
              </div>

              <div className="md:w-1/3">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full rounded-md bg-[#1F1F1F] px-4 py-3 text-white md:flex-1"
                  />
                  <button className="rounded-md bg-white px-6 py-3 text-black transition hover:bg-gray-300">
                    Submit
                  </button>
                </div>

                <div className="mt-6 flex gap-4">
                  {[FacebookLogo, TiktokLogo, InstagramLogo, YoutubeLogo].map(
                    (Icon, index) => (
                      <div
                        key={index}
                        className="cursor-pointer rounded-md bg-[#1F1F1F] p-3 transition hover:bg-gray-700"
                      >
                        <Icon
                          size={24}
                          className="text-white hover:text-gray-400"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <hr className="border-gray-700" />

            {/* <div className="flex flex-wrap justify-between gap-10 text-sm">
              {[
                {
                  title: "Support",
                  links: [
                    "Contact us",
                    "Delivery & returns",
                    "FAQs",
                    "Gift cards",
                    "Klarna",
                  ],
                },
                {
                  title: "Services",
                  links: [
                    "Stores",
                    "Appointments",
                    "Ski workshop",
                    "Demo",
                    "Equipment hire",
                  ],
                },
                {
                  title: "About",
                  links: [
                    "About us",
                    "Heritage",
                    "Careers",
                    "Affiliate programme",
                  ],
                },
                {
                  title: "Partners",
                  links: [
                    "The Snowboard Asylum",
                    "Outsiders Store",
                    "Our partners",
                    "Charities we support",
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="w-full sm:w-1/2 md:w-1/5">
                  <h4 className="mb-4 font-semibold">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link to="#">{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
            <div className="flex flex-wrap gap-10 text-sm">
              <div className="flex flex-col space-x-6">
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
              <div>
                <h5>ADRESS</h5>
                <p className="mt-2">
                  22 Durban Street, Wuse 2, Abuja. Nigeria.
                </p>
                <p>+234 803 786 9334</p>
                <p>+234 703 366 8523</p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Logo only */}
          <div className="flex w-full items-end justify-between border-t border-gray-700 pt-6">
            <div className="w-1/3">
              <img
                src="/logo2.svg"
                alt="Logo"
                className="w-full object-contain"
              />
            </div>
            {/* Empty right side, if needed later */}
            <div className="" />
            <div className="flex gap-6 text-sm">
              <p>
                &copy; {new Date().getFullYear()} COAN West Africa Limited. All
                Rights Reserved
              </p>
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
