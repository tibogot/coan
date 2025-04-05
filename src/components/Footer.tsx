import { LinkedinLogo, FacebookLogo, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative flex min-h-[80vh] flex-col justify-between bg-[#161826] py-12 text-white">
      <div className="container flex flex-col items-start justify-between px-10 md:flex-row">
        {/* Left Section - Navigation */}
        <div className="space-y-4 text-2xl">
          <Link to="/" className="block hover:text-orange-500">
            Home
          </Link>
          <Link to="/about" className="block hover:text-orange-500">
            About
          </Link>
          <Link to="/services" className="block hover:text-orange-500">
            Services
          </Link>
          <Link to="/gallery" className="block hover:text-orange-500">
            Gallery
          </Link>
          <Link to="/contact" className="block hover:text-orange-500">
            Contact
          </Link>
        </div>

        {/* Middle Section - Company Info */}
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">COAN West Africa</h4>
          <p>COAN West Africa Limited</p>
          <p>123 Business Avenue</p>
          <p>Lagos, Nigeria</p>
        </div>

        {/* Right Section - Contact Info */}
        <div className="space-y-2 text-sm">
          <h4 className="font-semibold">Contact</h4>
          <p>+234 123 456 789</p>
          <p>info@coanwestafrica.com</p>

          {/* Social Media Icons */}
          <div className="mt-2 flex space-x-4">
            <LinkedinLogo
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
            <X size={24} className="cursor-pointer hover:text-gray-400" />
            <FacebookLogo
              size={24}
              className="cursor-pointer hover:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Always at bottom */}
      <div className="mt-auto border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <div className="flex flex-wrap justify-center gap-6">
          <p className="cursor-pointer hover:text-white">Terms & Conditions</p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Legal Notice</p>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} COAN West Africa Limited. All Rights
          Reserved
        </p>
        <p className="mt-2 cursor-pointer hover:text-white">Back to Top</p>
      </div>
    </footer>
  );
};

export default Footer;
