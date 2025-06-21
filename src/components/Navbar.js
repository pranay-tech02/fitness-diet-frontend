import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleBrandClick = () => {
    if (token) {
      navigate("/dashboard"); // If logged in, go to Dashboard
    } else {
      navigate("/"); // Else, go to HeroSection
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <button onClick={handleBrandClick} className="text-2xl font-bold tracking-wide">
        Fitness & Diet Tracker
      </button>

      <div className="space-x-4 flex items-center">
        {token ? (
          <>
            <Link
              to="/add-diet-entry"
              className="hover:underline bg-white text-blue-600 px-3 py-1 rounded"
            >
              Add Entry
            </Link>
            <Link
              to="/view-diet-entries"
              className="hover:underline bg-white text-blue-600 px-3 py-1 rounded"
            >
              View Entries
            </Link>
            <Link
              to="/dashboard"
              className="hover:underline bg-white text-blue-600 px-3 py-1 rounded"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
