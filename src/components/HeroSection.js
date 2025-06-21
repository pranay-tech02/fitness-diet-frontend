import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Track Your Fitness & Diet Easily</h1>
      <p className="text-lg mb-6">Join today and start managing your nutrition and fitness goals!</p>

      <div className="space-x-4">
        <button
          onClick={() => navigate("/signup")}
          className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200"
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border border-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-blue-600"
        >
          Already a User? Login
        </button>
      </div>
    </div>
  );
}
