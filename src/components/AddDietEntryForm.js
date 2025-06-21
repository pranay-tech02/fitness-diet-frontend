import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddDietEntryForm() {
  const [foodItem, setFoodItem] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/diet/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ foodItem, calories, protein }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add entry");
      }

      toast.success("Diet entry added!");
      navigate("/view-diet-entries");
    } catch (err) {
      console.error(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Diet Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Food Item"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Protein"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
}
