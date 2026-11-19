import React from "react";

const Banner = () => {
  return (
    <section className="relative min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden rounded-2xl mx-4 my-6">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600"
        alt="Delicious pizza"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <span className="inline-block bg-orange-500 px-5 py-2 rounded-full text-sm font-semibold mb-5">
          Delicious Food, Happy Mood!
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Taste The Best
          <span className="text-orange-400"> Food </span>
          In Town!
        </h1>

        <p className="text-gray-200 mt-5 text-base md:text-lg">
          Fresh ingredients, amazing flavors, and unforgettable taste. Your
          favorite food is just one click away!
        </p>

        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-lg font-bold transition">
            Order Now
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-7 py-3 rounded-lg font-bold transition">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
