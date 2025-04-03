import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative h-screen w-full overflow-hidden p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Landscape background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col gap-4 md:flex-row">
        {/* Left Side - Subscription */}
        <div className="flex flex-col rounded-lg bg-blue-100/90 p-8 md:w-1/2">
          <div className="max-w-md">
            <h2 className="mb-2 text-xl font-medium">
              Subscribe to follow along with our latest news & updates.
            </h2>

            <div className="mt-4 mb-6 flex">
              <input
                type="email"
                placeholder="Email address*"
                className="flex-grow rounded-l border border-gray-300 p-2 text-sm"
              />
              <button className="rounded-r bg-blue-500 px-4 py-2 text-sm text-white">
                Subscribe
              </button>
            </div>

            <p className="mb-6 text-xs text-gray-600">
              By clicking submit, you consent to allow Lilac to store and
              process the info submitted and you acknowledge the
              <a
                href="/privacy-policy"
                className="text-blue-700 hover:underline"
              >
                {" "}
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="mt-auto">
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="mb-2 font-medium">About</h3>
                <p className="mb-2">News</p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">LinkedIn</h3>
                <p className="mb-2">Careers</p>
              </div>
              <div>
                <h3 className="mb-2 font-medium">Press Inquiries</h3>
                <p className="mb-2">Supplier Guide</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-gray-300 pt-4">
              <p className="text-xs text-gray-600">© Lilac Solutions 2025</p>
              <div className="flex space-x-4">
                <a href="/privacy-policy" className="text-xs text-gray-600">
                  Privacy Policy
                </a>
                <a href="/cookie-consent" className="text-xs text-gray-600">
                  Cookie Consent
                </a>
              </div>
            </div>

            <div className="mt-4">
              <img src="/lilac-logo.svg" alt="Lilac Logo" className="h-8" />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col justify-center rounded-lg bg-gray-100/80 p-8 md:w-1/2">
          <div className="mx-auto max-w-md">
            <h2 className="mb-6 text-xl font-medium">Contact us</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name*"
                  className="w-full rounded border border-gray-300 p-2"
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  className="w-full rounded border border-gray-300 p-2"
                />
              </div>

              <input
                type="email"
                placeholder="E-mail address*"
                className="w-full rounded border border-gray-300 p-2"
              />

              <textarea
                placeholder="Message*"
                rows={4}
                className="w-full rounded border border-gray-300 p-2"
              ></textarea>

              <p className="text-xs text-gray-600">
                By clicking submit, you consent to allow Lilac to store and
                process the info submitted and you acknowledge the consent
                requested.
              </p>

              <div>
                <button className="rounded bg-gray-200 px-6 py-2 text-sm hover:bg-gray-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
