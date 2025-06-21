import React, { useEffect, useState } from "react";
import PromotionalBanner from "../components/PromotionalBanner";

export default function DashboardSummary() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:5000/api/diet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch diet entries.");
        }
        const data = await res.json();
        setEntries(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchEntries();
  }, []);

  const totalCalories = entries.reduce((acc, curr) => acc + curr.calories, 0);
  const totalProtein = entries.reduce((acc, curr) => acc + curr.protein, 0);

  return (
    <div className="p-4 space-y-8">
      <PromotionalBanner />

      <div className="bg-white rounded shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Dashboard Summary</h2>

        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-100 rounded p-3 text-center">
                <h3 className="text-lg font-semibold text-blue-800">Total Calories</h3>
                <p className="text-2xl text-blue-900 font-bold">{totalCalories} kcal</p>
              </div>

              <div className="bg-green-100 rounded p-3 text-center">
                <h3 className="text-lg font-semibold text-green-800">Total Protein</h3>
                <p className="text-2xl text-green-900 font-bold">{totalProtein} g</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-700">Recent Entries</h3>
            <ul className="space-y-2">
              {entries.slice(0, 5).map((entry) => (
                <li
                  key={entry._id}
                  className="border p-2 rounded flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{entry.foodItem}</p>
                    <p className="text-sm text-gray-500">
                      {entry.calories} kcal • {entry.protein}g protein
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
