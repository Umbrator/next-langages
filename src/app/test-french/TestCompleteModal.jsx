"use client";

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const TestCompleteModal = ({ totalScore }) => {
  const shareOnWhatsApp = () => {
    const message = `I completed the French Language Proficiency Test with a total score of ${totalScore}/100! 🎉`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center relative">
        <div className="flex flex-col items-center">
          <div className="text-blue-600 mb-4">
            <FiCheckCircle size={56} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h2>
          <p className="text-lg text-gray-700 mb-4">
            Your total score is: <span className="font-bold text-red-500 text-2xl">{totalScore}/100</span>
          </p>
          <button
            onClick={shareOnWhatsApp}
            className="flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-4"
          >
            <FaWhatsapp className="mr-2" size={20} />
            Share your score on WhatsApp
          </button>
        </div>
      </div>
      <style jsx>{`
        .bg-white {
          background-color: #ffffff;
        }
        .text-blue-600 {
          color: #0056b3;
        }
        .text-red-500 {
          color: #e3342f;
        }
        .bg-blue-600 {
          background-color: #0056b3;
        }
        .bg-black {
          background-color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

export default TestCompleteModal;
