import React from 'react';
import { Film, Music, Book, Utensils } from 'lucide-react';

const favorites = [
  { category: "Movies", icon: Film, items: ["Baahubali", "RRR", "Arjun Reddy"] },
  { category: "Music", icon: Music, items: ["Telugu Pop", "Classical Carnatic", "Bollywood Hits"] },
  { category: "Books", icon: Book, items: ["Telugu Poetry", "Indian Mythology", "Science Fiction"] },
  { category: "Food", icon: Utensils, items: ["Biryani", "Dosa", "Gulab Jamun"] },
];

const FavoritesMoodBoard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Vardhan's Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favorites.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <category.icon size={24} className="text-indigo-500 mr-2" />
              <h3 className="text-xl font-bold text-indigo-800">{category.category}</h3>
            </div>
            <ul className="list-disc list-inside">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700 mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesMoodBoard;