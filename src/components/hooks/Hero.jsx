import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-20 px-4">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
      <p className="text-lg mb-6">This is a simple React homepage with Tailwind CSS</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
