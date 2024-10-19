import React from 'react';
import { Film, School, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: 2018,
    icon: School,
    title: 'First Meeting',
    description: 'Met at sri chaitanya school and became friends',
  },
  {
    year: 2018,
    icon: Film,
    title: 'Movie Outings',
    description: 'Started our tradition of watching movies together',
  },
  {
    year: 2019,
    icon: Film,
    title: '9th & 10th',
    description:
      'Naa love story neetho cinemalu examlu lo naa dagarae copy kottav gurthu petuko inka chala...',
  },
  {
    year: 2020,
    icon: Users,
    title: 'Friendship Grows',
    description:
      'Strengthened our bond despite challenges nuvu varae clg ki vellina gurthu petukoni 1st call chesindi nenae after inter ',
  },
  {
    year: 2021,
    icon: Film,
    title: 'Gap',
    description: 'Gap vachindi ',
  },
  {
    year: 2022,
    icon: Users,
    title: 'Restart',
    description: 'Malli modhalapettam...',
  },
  {
    year: 2023,
    icon: Film,
    title: 'Cinema Enthusiasts',
    description: 'Became true Telugu cinema connoisseurs and many more....',
  },
];

const FriendshipTimeline: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <motion.h2
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Friendship Timeline
      </motion.h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-indigo-400"></div>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 w-5/12 relative hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-6 -mt-1.5 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 shadow flex items-center justify-center">
                <event.icon size={20} className="text-white" />
              </div>
              <div className={`ml-12 ${index % 2 === 0 ? '' : 'text-right'}`}>
                <h3 className="text-2xl font-bold text-indigo-800">
                  {event.year}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mt-2">
                  {event.title}
                </h4>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: timelineEvents.length * 0.2 }}
      >
        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
          Share Your Story
        </button>
      </motion.div>
    </div>
  );
};

export default FriendshipTimeline;
