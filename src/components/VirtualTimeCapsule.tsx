import React, { useState } from 'react';
import { Lock, Unlock, Clock } from 'lucide-react';

interface TimeCapsuleItem {
  id: number;
  content: string;
  author: string;
  unlockDate: string;
}

const VirtualTimeCapsule: React.FC = () => {
  const [items, setItems] = useState<TimeCapsuleItem[]>([]);
  const [newItem, setNewItem] = useState({ content: '', author: '', unlockDate: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.content && newItem.author && newItem.unlockDate) {
      setItems([...items, { ...newItem, id: items.length + 1 }]);
      setNewItem({ content: '', author: '', unlockDate: '' });
    }
  };

  const isUnlocked = (date: string) => new Date(date) <= new Date();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Virtual Time Capsule</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-4 text-indigo-600">Time Capsule Items</h3>
          <div className="bg-indigo-100 p-4 rounded-lg h-64 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="mb-4 p-2 bg-white rounded shadow">
                {isUnlocked(item.unlockDate) ? (
                  <>
                    <Unlock className="inline-block mr-2 text-green-500" size={16} />
                    <p>{item.content}</p>
                  </>
                ) : (
                  <>
                    <Lock className="inline-block mr-2 text-red-500" size={16} />
                    <p>Locked until {item.unlockDate}</p>
                  </>
                )}
                <p className="text-sm text-gray-600 mt-1">- {item.author}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-indigo-600">Add to Time Capsule</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message:
                <textarea
                  value={newItem.content}
                  onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message for the future"
                />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Name:
                <input
                  type="text"
                  value={newItem.author}
                  onChange={(e) => setNewItem({ ...newItem, author: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your name"
                />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Unlock Date:
                <input
                  type="date"
                  value={newItem.unlockDate}
                  onChange={(e) => setNewItem({ ...newItem, unlockDate: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            >
              <Clock className="mr-2" size={20} />
              Add to Time Capsule
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VirtualTimeCapsule;