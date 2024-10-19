import React, { useState } from 'react';
import { CheckSquare, Square, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface Challenge {
  id: number;
  description: string;
  completed: boolean;
}

const initialChallenges: Challenge[] = [
  {
    id: 1,
    description: "Watch a Telugu movie you've never seen before",
    completed: false,
  },
  { id: 2, description: 'Try a new local restaurant', completed: false },
  { id: 3, description: 'Take a selfie with 5 friends', completed: false },
  { id: 4, description: 'Learn a new Telugu word or phrase', completed: false },
  { id: 5, description: 'Take me to a new place in vizag', completed: false },
  { id: 6, description: 'Cook a new recipe', completed: false },
  {
    id: 7,
    description: 'Write a letter to your future self',
    completed: false,
  },
];

const BirthdayChallenges: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [newChallenge, setNewChallenge] = useState('');

  const toggleChallenge = (id: number) => {
    setChallenges(
      challenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  };

  const addChallenge = () => {
    if (newChallenge.trim()) {
      setChallenges([
        ...challenges,
        {
          id: challenges.length + 1,
          description: newChallenge.trim(),
          completed: false,
        },
      ]);
      setNewChallenge('');
    }
  };

  const completedChallenges = challenges.filter((c) => c.completed).length;
  const progress = (completedChallenges / challenges.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
        Birthday Challenges
      </h2>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300">Progress</span>
          <span className="text-gray-300">
            {completedChallenges}/{challenges.length}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div
            className="bg-purple-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </div>
      <div className="mb-6 space-y-2">
        {challenges.map((challenge) => (
          <motion.div
            key={challenge.id}
            className="flex items-center p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600 transition-colors duration-300"
            onClick={() => toggleChallenge(challenge.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {challenge.completed ? (
              <CheckSquare className="text-green-400 mr-2" size={20} />
            ) : (
              <Square className="text-gray-400 mr-2" size={20} />
            )}
            <span
              className={
                challenge.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-200'
              }
            >
              {challenge.description}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newChallenge}
          onChange={(e) => setNewChallenge(e.target.value)}
          placeholder="Add a new challenge"
          className="flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 border-gray-500"
        />
        <button
          onClick={addChallenge}
          className="ml-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Add Challenge
        </button>
      </div>
      {completedChallenges === challenges.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 text-center"
        >
          <Trophy size={48} className="text-yellow-400 mx-auto mb-2" />
          <p className="text-xl font-bold text-purple-400">
            Congratulations! You've completed all challenges!
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BirthdayChallenges;
