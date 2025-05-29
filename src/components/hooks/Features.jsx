import React from 'react';

const Features = () => {
  const features = ['Fast', 'Responsive', 'Modern'];

  return (
    <section className="py-16 px-6 text-center">
      <h3 className="text-2xl font-semibold mb-8">Why Choose Us</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        {features.map((feature, i) => (
          <div key={i} className="bg-white p-6 shadow rounded border">
            <h4 className="text-xl font-medium">{feature}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
