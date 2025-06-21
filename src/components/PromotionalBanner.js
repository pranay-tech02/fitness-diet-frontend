import React from "react";

export default function PromotionalBanner() {
  return (
    <div className="relative mb-6 rounded overflow-hidden shadow-lg">
      <img
        src="https://images.pexels.com/photos/8411300/pexels-photo-8411300.jpeg?auto=compress&cs=tinysrgb&w=1080&h=400&dpr=2"
        alt="Fitness Motivation Poster"
        className="w-full h-56 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold text-center px-4">
          "Push harder than yesterday if you want a different tomorrow."
        </h2>
      </div>
    </div>
  );
}
