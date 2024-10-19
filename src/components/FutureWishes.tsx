import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const wishTemplates = [
  "May your next year be filled with {adjective} {noun} and {adjective} {noun}!",
  "Wishing you {number} {noun} and {number} {noun} in the coming year!",
  "Here's to {number} more years of {adjective} friendship and {adjective} adventures!",
  "May your {ordinal} year bring you {adjective} success and {adjective} happiness!",
];

const adjectives = ["amazing", "wonderful", "exciting", "joyful", "unforgettable", "brilliant", "fantastic"];
const nouns = ["experiences", "achievements", "memories", "adventures", "successes", "moments", "milestones"];
const numbers = ["countless", "a million", "infinite", "endless", "numerous"];
const ordinals = ["25th", "26th", "27th", "28th", "29th", "30th"];

const FutureWishes: React.FC = () => {
  const [wish, setWish] = useState("");

  const generateWish = () => {
    const template = wishTemplates[Math.floor(Math.random() * wishTemplates.length)];
    const newWish = template
      .replace(/{adjective}/g, () => adjectives[Math.floor(Math.random() * adjectives.length)])
      .replace(/{noun}/g, () => nouns[Math.floor(Math.random() * nouns.length)])
      .replace(/{number}/g, () => numbers[Math.floor(Math.random() * numbers.length)])
      .replace(/{ordinal}/g, () => ordinals[Math.floor(Math.random() * ordinals.length)]);
    setWish(newWish);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Future Birthday Wishes</h2>
      <div className="text-center mb-6">
        <button
          onClick={generateWish}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center mx-auto"
        >
          <Sparkles size={20} className="mr-2" />
          Generate Wish
        </button>
      </div>
      {wish && (
        <div className="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 rounded-lg">
          <p className="text-lg font-semibold">{wish}</p>
        </div>
      )}
    </div>
  );
};

export default FutureWishes;