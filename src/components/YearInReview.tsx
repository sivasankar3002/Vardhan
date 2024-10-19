import React from 'react';
import { Film, MapPin, Calendar } from 'lucide-react';

const monthlyMovies = [
  { month: "January", movies: ["Hanu-Man"] },
  { month: "August", movies: ["Mr. Bachchan", "Raayan", "Demonty Colony 2"] },
  // Add more months and movies as needed
];

const notableEvents = [
  { icon: MapPin, event: "Bheemli Beach visits" },
  { icon: Calendar, event: "Krishnaashtami celebrations" },
  { icon: MapPin, event: "Vizu Stadium walks" },
];

const YearInReview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Year in Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">Monthly Movie Summary</h3>
          {monthlyMovies.map((item, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{item.month}</h4>
              <ul className="list-disc list-inside text-gray-600">
                {item.movies.map((movie, movieIndex) => (
                  <li key={movieIndex}>{movie}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-indigo-800">Notable Events</h3>
          {notableEvents.map((event, index) => (
            <div key={index} className="flex items-center mb-4">
              <event.icon size={24} className="text-indigo-500 mr-2" />
              <span className="text-gray-800">{event.event}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-indigo-800">Movie Watch Count</h3>
        <div className="h-64 bg-gray-200 rounded-lg flex items-end justify-around p-4">
          {monthlyMovies.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="bg-indigo-500 w-8" 
                style={{ height: `${item.movies.length * 20}%` }}
              ></div>
              <span className="mt-2 text-xs font-semibold text-gray-600">{item.month.slice(0, 3)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearInReview;