"use client";

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const TestCompleteModal = ({ totalScore }) => {
  const shareOnWhatsApp = () => {
    const message = `I completed the Italian Language Proficiency Test with a total score of ${totalScore}/50! 🎉`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a] bg-opacity-80">
      <div className="bg-[#f9f8f6] rounded-lg shadow-2xl p-8 max-w-md w-full text-center relative border border-[#ff4b4b]">
        <div className="flex flex-col items-center">
          <div className="text-[#ff4b4b] mb-4">
            <FiCheckCircle size={56} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h2>
          <p className="text-lg text-gray-700 mb-4">
            Your total score is: <span className="font-bold text-[#ff4b4b] text-2xl">{totalScore}/50</span>
          </p>
          <button
            onClick={shareOnWhatsApp}
            className="flex items-center justify-center bg-[#25D366] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#1ebd5b] transition-all duration-300 transform hover:scale-105 mt-4"
          >
            <FaWhatsapp className="mr-2" size={20} />
            Share your score on WhatsApp
          </button>
        </div>
      </div>
      <style jsx>{`
        .bg-[#f9f8f6] {
          background-color: #f9f8f6;
        }
        .text-[#ff4b4b] {
          color: #ff4b4b;
        }
        .bg-[#1a1a1a] {
          background-color: rgba(26, 26, 26, 0.8);
        }
      `}</style>
    </div>
  );
};

export default TestCompleteModal;
