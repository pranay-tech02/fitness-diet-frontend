import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import AddDietEntryForm from "./components/AddDietEntryForm";
import ViewDietEntries from "./components/ViewDietEntries";
import DashboardSummary from "./components/DashboardSummary";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<DashboardSummary />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/add-diet-entry" element={<AddDietEntryForm />} />
        <Route path="/view-diet-entries" element={<ViewDietEntries />} />
        <Route path="/dashboard" element={<DashboardSummary />} />
        <Route path="*" element={<div className="p-4 text-center text-red-500">Page Not Found</div>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </div>
  );
}

export default App;
