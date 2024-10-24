import React from 'react';

const DevelopmentService = () => {
  return (
    <div className="max-w-4xl mx-auto text-center p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-indigo-600">Development Services</h2>
      <p className="mt-4 text-lg text-gray-600">
        We offer cutting-edge development solutions for web and mobile applications. Our team is experienced in delivering high-quality code with a focus on performance and scalability.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Web Development</h3>
          <p className="mt-2 text-gray-600">
            We develop fast, responsive, and scalable web applications using the latest technologies such as React, Node.js, and more.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Mobile Development</h3>
          <p className="mt-2 text-gray-600">
            Our mobile app development services cover iOS and Android platforms with cross-platform solutions for a seamless experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentService;
