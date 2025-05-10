import { useRef } from "react";

function Card1() {
  return (
    <div className="card relative w-full" id="card-1">
      <div className="card-inner relative w-full bg-purple-200 p-8">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="card-content flex-grow md:w-2/3">
            <h1 className="mb-4 text-2xl font-bold">Inspiration Engine</h1>
            <p>Ignite creativity with clarity, passion, and purpose.</p>
          </div>
          <div className="card-img aspect-video overflow-hidden rounded-xl md:w-1/3">
            <img
              src="./truck.png"
              alt="Inspiration Engine"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card relative w-full" id="card-2">
      <div className="card-inner relative w-full bg-white p-8">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="card-content flex-grow md:w-2/3">
            <h1 className="mb-4 text-2xl font-bold">Design Pulse</h1>
            <p>Crafting digital elegance through visual storytelling.</p>
          </div>
          <div className="card-img aspect-video overflow-hidden rounded-xl md:w-1/3">
            <img
              src="./truck.png"
              alt="Design Pulse"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="card relative w-full" id="card-3">
      <div className="card-inner relative w-full bg-yellow-300 p-8">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="card-content flex-grow md:w-2/3">
            <h1 className="mb-4 text-2xl font-bold">Presence Online</h1>
            <p>Your story deserves a spotlight on every screen.</p>
          </div>
          <div className="card-img aspect-video overflow-hidden rounded-xl md:w-1/3">
            <img
              src="./truck.png"
              alt="Presence Online"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="card relative w-full" id="card-4">
      <div className="card-inner relative w-full bg-gray-900 p-8 text-white">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div className="card-content flex-grow md:w-2/3">
            <h1 className="mb-4 text-2xl font-bold">Lasting Impressions</h1>
            <p>End strong, stay remembered, lead with impact.</p>
          </div>
          <div className="card-img aspect-video overflow-hidden rounded-xl md:w-1/3">
            <img
              src="./truck.png"
              alt="Lasting Impressions"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeCard() {
  //@ts-ignore
  const container = useRef();

  return (
    //@ts-ignore
    <div className="overflow-x-hidden" ref={container}>
      {/* <section className="hero relative h-screen w-full p-0">
        <img src="./truck.png" alt="" className="h-full w-full object-cover" />
      </section> */}

      <section className="intro relative flex h-screen w-full items-center bg-gray-100 p-8">
        <h1 className="max-w-4xl text-3xl font-bold">
          Creating standout brands for startups that bring joy and leave lasting
          impressions.
        </h1>
      </section>

      <section className="cards relative">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </section>

      <section className="outro relative flex h-screen w-full items-center bg-red-300 p-8">
        <h1 className="max-w-4xl text-3xl font-bold">
          Creating standout brands for startups that bring joy and leave lasting
          impressions.
        </h1>
      </section>
    </div>
  );
}
