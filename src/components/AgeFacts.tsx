'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cake, Clock, Calendar, Sun } from 'lucide-react';

export default function AgeFacts() {
  const [ageDetails, setAgeDetails] = useState({
    years: 0,
    months: 0,
    days: 0,
    weeks: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [activeTab, setActiveTab] = useState('years');

  useEffect(() => {
    const birthDate = new Date('2003-10-15'); // Set the birthdate here
    const updateAge = () => {
      const now = new Date();
      const ageInMilliseconds = now.getTime() - birthDate.getTime();
      const ageDate = new Date(ageInMilliseconds);

      const years = ageDate.getUTCFullYear() - 1970;
      const months = years * 12;
      const days = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(days / 7);
      const hours = Math.floor(ageInMilliseconds / (1000 * 60 * 60));
      const minutes = Math.floor(ageInMilliseconds / (1000 * 60));
      const seconds = Math.floor(ageInMilliseconds / 1000);

      setAgeDetails({ years, months, days, weeks, hours, minutes, seconds });
    };

    updateAge();
    const timer = setInterval(updateAge, 1000);

    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { key: 'years', icon: <Cake className="w-6 h-6" />, label: 'Years' },
    { key: 'months', icon: <Calendar className="w-6 h-6" />, label: 'Months' },
    { key: 'days', icon: <Sun className="w-6 h-6" />, label: 'Days' },
    { key: 'hours', icon: <Clock className="w-6 h-6" />, label: 'Hours' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Age Facts
          </h2>
          <div className="flex justify-center space-x-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-6xl font-bold text-gray-800 mb-2">
              {ageDetails[activeTab].toLocaleString()}
            </p>
            <p className="text-xl text-gray-600">{activeTab}</p>
          </motion.div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Weeks</p>
              <p className="text-lg font-semibold text-gray-800">
                {ageDetails.weeks.toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Minutes</p>
              <p className="text-lg font-semibold text-gray-800">
                {ageDetails.minutes.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
