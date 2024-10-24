import React from 'react';

const DesignService = () => {
  return (
    <div className="max-w-4xl mx-auto text-center p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-indigo-600">Design Services</h2>
      <p className="mt-4 text-lg text-gray-600">
        Our design team crafts beautiful, user-friendly interfaces for websites and apps. We focus on creating visually appealing and functional designs that resonate with users.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">UI/UX Design</h3>
          <p className="mt-2 text-gray-600">
            We create intuitive user experiences with seamless and appealing UI/UX design principles to ensure customer satisfaction.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Graphic Design</h3>
          <p className="mt-2 text-gray-600">
            From logos to full branding, we deliver creative graphic designs that represent your business values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignService;
