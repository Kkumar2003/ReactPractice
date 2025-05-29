import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-6">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="text-blue-600 underline">Go back home</Link>
    </div>
  );
};

export default NotFound;
