import React, { useState } from "react";
import { Campaign } from "./BudgetHome";
import { v4 as uuidv4 } from "uuid";

// Example colors for the dropdown
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"];

const BudgetForm: React.FC<{
  addCampaign: (campaign: Campaign) => void;
  usedColors: string[]; // List of already-used colors
  updateUsedColors: (color: string, action: "add" | "remove") => void; // Callback to modify used colors
}> = ({ addCampaign, usedColors, updateUsedColors }) => {
  const [color, setColor] = useState<string | null>(null);
  const [maxSpend, setMaxSpend] = useState<number | "">("");
  const [category, setCategory] = useState<Campaign["category"]>("Entertainment");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (maxSpend === "" || maxSpend <= 0) {
      alert("Please enter a valid maximum spend.");
      return;
    }
    if (!color) {
      alert("Please select a color.");
      return;
    }

    // Add the new campaign
    addCampaign({ id: uuidv4(), name: "Unnamed Campaign", color, maxSpend, category });

    // Mark the selected color as used
    updateUsedColors(color, "add");

    // Reset form fields
    setMaxSpend("");
    setColor(null);
    setCategory("Entertainment");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Category Selection */}
      <select
        className="w-full p-2 border"
        value={category}
        onChange={(e) => setCategory(e.target.value as Campaign["category"])}
      >
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Education">Education</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Bills">Bills</option>
        <option value="Dining out">Dining Out</option>
        <option value="General">General</option>
      </select>

      {/* Custom Dropdown for Colors */}
      <div className="relative">
        <select
          className="w-full p-2 border"
          value={color || ""}
          onChange={(e) => setColor(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a color
          </option>
          {colors.map((col) => (
            <option
              key={col}
              value={col}
              disabled={usedColors.includes(col)} // Disable if color is already used
            >
              {/* Color Box (rounded) */}
              <div
                className="inline-block w-6 h-6 rounded-full mr-2"
                style={{ backgroundColor: col }}
              ></div>
              {/* Display "This color has been picked" if color is used */}
              {usedColors.includes(col) && (
                <span className="text-gray-500">This color has been picked</span>
              )}
            </option>
          ))}
        </select>
      </div>

      {/* Maximum Spend */}
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Maximum Spend"
        value={maxSpend}
        onChange={(e) => {
          const value = e.target.value;
          if (!isNaN(Number(value)) && Number(value) >= 0) {
            setMaxSpend(Number(value));
          } else if (value === "") {
            setMaxSpend("");
          }
        }}
        required
      />

      {/* Submit Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Add Campaign
      </button>
    </form>
  );
};

export default BudgetForm;
