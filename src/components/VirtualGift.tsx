import React, { useState } from 'react';
import { Gift } from 'lucide-react';

const gifts = [
  { id: 1, message: "Happy Birthday, Vardhan! Here's to more Telugu movie marathons!", image: "https://source.unsplash.com/random/400x300?telugu+cinema" },
  { id: 2, message: "Wishing you a year filled with laughter and success!", image: "https://source.unsplash.com/random/400x300?celebration" },
  { id: 3, message: "May your day be as awesome as our friendship!", image: "https://source.unsplash.com/random/400x300?friendship" },
];

const VirtualGift: React.FC = () => {
  const [openGift, setOpenGift] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Virtual Gift Unwrapping</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gifts.map((gift) => (
          <div key={gift.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            {openGift === gift.id ? (
              <div className="p-4">
                <img src={gift.image} alt="Gift" className="w-full h-48 object-cover rounded-t-lg" />
                <p className="text-gray-800 mt-4">{gift.message}</p>
              </div>
            ) : (
              <div 
                className="h-64 bg-indigo-500 flex items-center justify-center cursor-pointer"
                onClick={() => setOpenGift(gift.id)}
              >
                <Gift size={64} className="text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualGift;