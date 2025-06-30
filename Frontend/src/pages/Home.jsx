import React from 'react';
import About from './About';
import Visit from './Visit';
import Contact from './Contact';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      
      {/* Hero Section */}
      <section
        className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a7/Seaview_%28Clifton_Beach%29_Karachi.jpg')",
        }}
      >
        <div className="bg-blue-400 bg-opacity-50 p-8 rounded-xl max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Welcome to QuickTour</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Here you can visit our <span className="font-semibold text-blue-200">tourers</span> and explore amazing destinations across Pakistan — from Karachi’s coastline to Lahore’s heritage to Islamabad’s beauty.
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <section className="w-full">
        <About />
        <Visit />
        <Contact />
      </section>
    </div>
  );
}

export default Home;
