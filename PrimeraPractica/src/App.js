import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Flex Layout */}
        <div className="flex justify-between mb-10">
          {/* HStack / Row */}
          <div className="flex space-x-4">
            <div className="bg-blue-300 p-5 w-32 text-center rounded">HStack 1</div>
            <div className="bg-blue-300 p-5 w-32 text-center rounded">HStack 2</div>
          </div>
          {/* VStack / Column */}
          <div className="flex flex-col space-y-4">
            <div className="bg-green-300 p-5 w-32 text-center rounded">VStack 1</div>
            <div className="bg-green-300 p-5 w-32 text-center rounded">VStack 2</div>
          </div>
        </div>

        {/* AspectRatio */}
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Box */}
        <div className="bg-blue-400 p-6 rounded-lg mb-10">
          <h2 className="text-white text-lg">Box</h2>
          <p className="text-white">This is a simple box component with padding and rounded corners.</p>
        </div>

        {/* Center */}
        <div className="flex justify-center items-center h-64 bg-gray-300 mb-10">
          <div className="bg-red-400 p-5 text-center rounded-lg">Centered Box</div>
        </div>

        {/* Stack */}
        <div className="space-y-5">
          <div className="bg-yellow-300 p-5 rounded">Stack Item 1</div>
          <div className="bg-yellow-300 p-5 rounded">Stack Item 2</div>
          <div className="bg-yellow-300 p-5 rounded">Stack Item 3</div>
        </div>

        {/* ZStack */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="relative p-10 bg-blue-500 text-white text-center">
            ZStack - Content on top of the background
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
