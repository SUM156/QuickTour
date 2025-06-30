import React from 'react';

function About() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-16 relative"
      style={{ backgroundImage: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/a6/e9/f8/caption.jpg?w=500&h=400&s=1)` }}


    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-blue-100 bg-opacity-80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">About QuickTour</h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
          <span className="text-blue-500 font-semibold">QuickTour</span> is your gateway to exploring Pakistan like never before.
          Whether you're planning a quick getaway or a full-blown adventure, we connect you with the most
          exciting, scenic, and culturally rich destinations.
        </p>
        <div className="text-gray-600 space-y-4">
          <p>
            We believe in travel that’s simple, fun, and unforgettable. From Karachi’s vibrant streets to the serene beauty of Islamabad, QuickTour makes it easy to discover your next adventure.
          </p>
          <p>
            Our mission is to inspire travelers and provide tools that help you explore hidden gems with confidence and ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
