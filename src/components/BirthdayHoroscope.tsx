import React, { useState } from 'react';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const horoscopes = {
  Aries: "Today is your lucky day! Your enthusiasm will lead you to new opportunities.",
  Taurus: "Your determination will pay off today. Stay focused on your goals.",
  Gemini: "Communication is key today. Express your ideas clearly and listen to others.",
  Cancer: "Trust your intuition today. It will guide you towards the right decisions.",
  Leo: "Your creativity is at its peak. Use it to solve any challenges that come your way.",
  Virgo: "Pay attention to details today. Your meticulousness will be appreciated.",
  Libra: "Balance is important today. Find harmony in your work and personal life.",
  Scorpio: "Your passion will drive you towards success. Embrace new experiences.",
  Sagittarius: "Adventure awaits! Take a chance on something new and exciting.",
  Capricorn: "Your hard work will be recognized today. Stay committed to your goals.",
  Aquarius: "Your innovative ideas will shine today. Share them with confidence.",
  Pisces: "Trust your instincts today. Your empathy will help you connect with others."
};

const BirthdayHoroscope: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState('');

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Birthday Horoscope</h2>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select your zodiac sign:
          <select
            value={selectedSign}
            onChange={(e) => setSelectedSign(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Choose a sign</option>
            {zodiacSigns.map((sign) => (
              <option key={sign} value={sign}>{sign}</option>
            ))}
          </select>
        </label>
      </div>
      {selectedSign && (
        <div className="bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">{selectedSign} Horoscope:</h3>
          <p>{horoscopes[selectedSign]}</p>
        </div>
      )}
    </div>
  );
};

export default BirthdayHoroscope;