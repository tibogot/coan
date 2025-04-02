const Footer = () => {
  return (
    <footer className="font-NHD w-full border-t border-black/10 bg-blue-500 px-10 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="mb-6 text-2xl font-bold">COAN West Africa Limited</h3>
          <p className="w-3/4 text-black/70">
            A construction company offering integrated solutions and related
            services, known for executing complex engineering solutions with the
            highest level of technical expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-6 text-lg font-bold">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-black/70 transition-colors hover:text-orange-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black/70 transition-colors hover:text-orange-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black/70 transition-colors hover:text-orange-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black/70 transition-colors hover:text-orange-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-6 text-lg font-bold">Contact Us</h4>
          <ul className="space-y-3">
            <li className="text-black/70">123 Business Street</li>
            <li className="text-black/70">Lagos, Nigeria</li>
            <li className="text-black/70">Phone: +234 123 456 7890</li>
            <li className="text-black/70">Email: info@coanwestafrica.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-black/10 pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between md:flex-row">
          <p className="text-black/70">
            © 2024 COAN West Africa Limited. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a
              href="#"
              className="text-black/70 transition-colors hover:text-orange-400"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black/70 transition-colors hover:text-orange-400"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
