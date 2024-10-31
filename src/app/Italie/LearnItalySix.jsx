'use client';

import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component for optimized images
import { FaAngleDoubleRight } from "react-icons/fa"; // Import the icon

const FAQSection = () => {
  // State for tracking expanded/collapsed items
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle the toggle of FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and close
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* FAQ Section */}
        <div className="text-left flex flex-col justify-center">
          {/* Heading with FaAngleDoubleRight icon */}
          <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
            <FaAngleDoubleRight className="ml-2" />
            FAQ
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Just in Case You Missed Anything.
          </h2>
          <ul className="text-gray-800 space-y-4">
            {faqData.map((faq, index) => (
              <li key={index} className="border-b border-gray-300 py-4">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span
                    className={`text-xl transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {/* Apply animation effect when expanding/collapsing */}
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center">
          <img
            src="https://templatekits.themewarrior.com/inlingo-new/wp-content/uploads/sites/102/2023/08/YLZ8PNG-1.jpg"
            alt="Happy Italian Students"
            className="w-full h-full rounded-lg shadow-md object-cover"
            width={600} // Specify the width for the image
            height={400} // Specify the height for the image
            style={{ transform: "none", transition: "none" }}
          />

          {/* Decorative Squares */}
          <div className="absolute bottom-0 right-0 flex space-x-1 space-y-1">
            <div className="w-4 h-4 bg-white"></div>
            <div className="w-4 h-4 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
