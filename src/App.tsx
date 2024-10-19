import React, { useState, useEffect } from 'react';
import {
  Gift,
  Calendar,
  BarChart,
  MessageSquare,
  Sparkles,
  Heart,
  Clock,
  Lock,
  Unlock,
  Zap,
  Leaf,
  Camera,
  List,
} from 'lucide-react';
import VirtualGift from './components/VirtualGift';
import FriendshipTimeline from './components/FriendshipTimeline';
import YearInReview from './components/YearInReview';
import MemoryWall from './components/MemoryWall';
import FutureWishes from './components/FutureWishes';
import FavoritesMoodBoard from './components/FavoritesMoodBoard';
import CountdownTimer from './components/CountdownTimer';
import AgeFacts from './components/AgeFacts';
import BirthdayHoroscope from './components/BirthdayHoroscope';
import VirtualTimeCapsule from './components/VirtualTimeCapsule';
import BirthdayChallenges from './components/BirthdayChallenges';

function App() {
  const [currentSection, setCurrentSection] = useState('memory');
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'Happy Birthday Vardhan!';
  }, []);

  const handleUnlock = () => {
    if (password === 'JV2012s2012') {
      setIsLocked(false);
    } else {
      alert('Incorrect password. Try again!');
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'gift':
        return <VirtualGift />;
      case 'timeline':
        return <FriendshipTimeline />;
      case 'review':
        return <YearInReview />;
      case 'memory':
        return <MemoryWall />;
      case 'wishes':
        return <FutureWishes />;
      case 'favorites':
        return <FavoritesMoodBoard />;
      case 'agefacts':
        return <AgeFacts />;
      case 'horoscope':
        return <BirthdayHoroscope />;
      case 'timecapsule':
        return <VirtualTimeCapsule />;
      case 'challenges':
        return <BirthdayChallenges />;
      default:
        return <MemoryWall />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
      <header
        className={`p-4 bg-black bg-opacity-30 ${
          isLocked && currentSection !== 'memory' ? 'blur-sm' : ''
        }`}
      >
        <h1 className="text-4xl font-bold text-center">
          Happy Birthday Vardhan!
        </h1>
        <CountdownTimer targetDate="2024-11-01T11:00:00" />
      </header>
      <nav className="flex flex-wrap justify-center space-x-2 space-y-2 p-4 bg-black bg-opacity-20">
        <button
          onClick={() => setCurrentSection('memory')}
          className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          <MessageSquare size={20} />
          <span>Memory Wall</span>
        </button>
        {isLocked ? (
          <div className="flex items-center space-x-2">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 rounded-full bg-white text-black"
            />
            <button
              onClick={handleUnlock}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            >
              <Lock size={20} />
              <span>Unlock</span>
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => setCurrentSection('gift')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <Gift size={20} />
              <span>Gifts</span>
            </button>
            <button
              onClick={() => setCurrentSection('timeline')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <Calendar size={20} />
              <span>Timeline</span>
            </button>
            <button
              onClick={() => setCurrentSection('review')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <BarChart size={20} />
              <span>Year Review</span>
            </button>
            <button
              onClick={() => setCurrentSection('favorites')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <Heart size={20} />
              <span>Favorites</span>
            </button>
            <button
              onClick={() => setCurrentSection('agefacts')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <Clock size={20} />
              <span>Age Facts</span>
            </button>
            <button
              onClick={() => setCurrentSection('horoscope')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <Sparkles size={20} />
              <span>Horoscope</span>
            </button>

            <button
              onClick={() => setCurrentSection('timecapsule')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <Lock size={20} />
              <span>Time Capsule</span>
            </button>
            <button
              onClick={() => setCurrentSection('challenges')}
              className="flex items-center space-x-1 px-3 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              <List size={20} />
              <span>Challenges</span>
            </button>
          </>
        )}
      </nav>
      <main className="container mx-auto p-4">{renderSection()}</main>
      <footer className="text-center p-4 bg-black bg-opacity-30">
        <p>
          Crafted with infinite ❤️ for Vardhan by Siva | Cherishing the magic of
          our friendship since 2018.
        </p>
      </footer>
    </div>
  );
}

export default App;
