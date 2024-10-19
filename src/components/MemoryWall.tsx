import React, { useState } from 'react';
import {
  MessageSquare,
  Image as ImageIcon,
  Video,
  FileText,
} from 'lucide-react';

const initialMemories = [
  {
    id: 1,
    type: 'text',
    content:
      'Advance Happy birthday, Vardhan! Inka chala cinemalu chudali travel cheyali',
    author: 'Siva',
  },
];

const MemoryWall: React.FC = () => {
  const [memories, setMemories] = useState(initialMemories);
  const [newMemory, setNewMemory] = useState({
    type: 'text',
    content: '',
    author: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMemory.content && newMemory.author) {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setMemories([
            ...memories,
            {
              ...newMemory,
              id: memories.length + 1,
              content: reader.result as string,
            },
          ]);
          setNewMemory({ type: 'text', content: '', author: '' });
          setFile(null);
        };
        reader.readAsDataURL(file);
      } else {
        setMemories([...memories, { ...newMemory, id: memories.length + 1 }]);
        setNewMemory({ type: 'text', content: '', author: '' });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setNewMemory({
        ...newMemory,
        type: e.target.files[0].type.split('/')[0],
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Memory Wall</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {memories.map((memory) => (
          <div key={memory.id} className="bg-white rounded-lg shadow-lg p-4">
            {memory.type === 'text' && (
              <div className="flex items-start">
                <MessageSquare
                  size={24}
                  className="text-indigo-500 mr-2 flex-shrink-0"
                />
                <p className="text-gray-800">{memory.content}</p>
              </div>
            )}
            {memory.type === 'image' && (
              <img
                src={memory.content}
                alt="Memory"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
            )}
            {memory.type === 'video' && (
              <video
                src={memory.content}
                controls
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
            )}
            <p className="text-right text-sm text-gray-600 mt-2">
              - {memory.author}
            </p>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h3 className="text-xl font-bold mb-4 text-indigo-800">Add a Memory</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type:
            <select
              value={newMemory.type}
              onChange={(e) =>
                setNewMemory({
                  ...newMemory,
                  type: e.target.value as 'text' | 'image' | 'video',
                })
              }
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="text">Text</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </label>
        </div>
        {newMemory.type === 'text' ? (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message:
              <textarea
                value={newMemory.content}
                onChange={(e) =>
                  setNewMemory({ ...newMemory, content: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
              />
            </label>
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload {newMemory.type === 'image' ? 'Image' : 'Video'}:
              <input
                type="file"
                accept={newMemory.type === 'image' ? 'image/*' : 'video/*'}
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Name:
            <input
              type="text"
              value={newMemory.author}
              onChange={(e) =>
                setNewMemory({ ...newMemory, author: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Memory
        </button>
      </form>
    </div>
  );
};

export default MemoryWall;
