import React, { useEffect, useState } from "react";

export default function ViewDietEntries() {
  const [dietEntries, setDietEntries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDietEntries = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:5000/api/diet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          setError("Unauthorized. Please log in again.");
          return;
        }

        if (!res.ok) {
          setError("Failed to fetch diet entries.");
          return;
        }

        const data = await res.json();
        if (Array.isArray(data)) {
          setDietEntries(data);
        } else {
          setError("Unexpected response from server.");
        }
      } catch (err) {
        console.error(err.message);
        setError("Failed to connect to the server.");
      }
    };

    fetchDietEntries();
  }, []);

  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Diet Entries</h2>

      {dietEntries.length === 0 ? (
        <p className="text-center text-gray-500">No entries found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dietEntries.map((entry) => (
            <div
              key={entry._id}
              className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600">{entry.foodItem}</h3>
              <p className="text-gray-700">Calories: {entry.calories} kcal</p>
              <p className="text-gray-700">Protein: {entry.protein} g</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
