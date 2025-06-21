import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL;

export default function ViewDietEntries() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEntries = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(`${API_URL}/api/diet`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Failed to fetch entries.");
        setEntries(data);
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Diet Entries</h2>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="space-y-2">
          {entries.map((entry) => (
            <li key={entry._id} className="border p-2 rounded shadow-sm">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{entry.foodItem}</p>
                  <p className="text-sm text-gray-500">{entry.calories} kcal | {entry.protein}g protein</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
