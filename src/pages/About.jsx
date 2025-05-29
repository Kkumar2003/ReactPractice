import React from 'react';
// import Header from '../components/hooks/Header';
// import Footer from '../components/hooks/Footer';

const About = () => {
  return (
    <>
  
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 text-lg mb-8">
          We are a passionate team building fast, modern, and user-friendly web experiences.
          Our mission is to deliver quality and simplicity with every project.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border rounded shadow">
            <h4 className="font-bold">Kartik Sharma</h4>
            <p className="text-sm text-gray-500">Frontend Developer</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h4 className="font-bold">Amit Verma</h4>
            <p className="text-sm text-gray-500">Backend Developer</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h4 className="font-bold">Priya Desai</h4>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>
        </div>
      </section>
  
    </>
  );
};

export default About;
