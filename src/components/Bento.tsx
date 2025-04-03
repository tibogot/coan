import React from "react";

const BentoGrid: React.FC = () => {
  return (
    <div className="mx-10 grid w-full max-w-7xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* Top Row */}
      <div className="col-span-1 h-64 overflow-hidden rounded-xl shadow-lg sm:h-80 md:row-span-2">
        <img
          src="https://picsum.photos/400/600"
          alt="Bento Image 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-1 flex h-32 items-center justify-center rounded-xl bg-gray-800 p-4 text-lg font-bold text-white shadow-lg sm:h-40">
        Together, we're not just building structures, we're building trust.
      </div>
      <div className="col-span-1 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-orange-500 text-lg font-bold text-white shadow-lg sm:h-40">
        <img
          src="https://picsum.photos/400/300"
          alt="Bento Image 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-1 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-white text-lg font-bold text-black shadow-lg sm:h-80 md:row-span-2">
        <img
          src="https://picsum.photos/400/600"
          alt="Bento Image 3"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Middle Row */}
      <div className="relative col-span-2 flex h-64 items-center justify-center overflow-hidden rounded-xl bg-black text-2xl font-bold text-white shadow-lg sm:h-80 md:row-span-2">
        <img
          src="https://picsum.photos/800/500"
          alt="Bento Image 4"
          className="h-full w-full object-cover opacity-60"
        />
        <span className="absolute">Formix</span>
      </div>
      <div className="col-span-1 flex h-32 items-center justify-center rounded-xl bg-orange-600 p-4 text-lg font-bold text-white shadow-lg sm:h-40">
        Formix Excellence in Every Facade
      </div>

      {/* Bottom Row */}
      <div className="col-span-1 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-gray-900 text-lg font-bold text-white shadow-lg sm:h-40">
        <img
          src="https://picsum.photos/400/400"
          alt="Bento Image 5"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-2 flex h-32 items-center justify-center rounded-xl bg-blue-900 p-4 text-lg font-bold text-white shadow-lg sm:h-40">
        Where every blueprint takes shape.
      </div>
      <div className="col-span-2 h-32 overflow-hidden rounded-xl bg-gray-700 shadow-lg sm:h-40">
        <img
          src="https://picsum.photos/800/600?random=6"
          alt="Bento Image 6"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default BentoGrid;
