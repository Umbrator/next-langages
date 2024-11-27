"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); // Show the success modal
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset the form
  };

  const locationData = [
    {
      address: "Ocean Connecting sarl, Agadir 80000",
      phone: "+212-704309787",
      email: "oceanconnecting.ma@gmail.com",
      workingHours: "Mon - Fri: 9 AM - 6 PM",
    },
  ];

  return (
    <section className="bg-indigo-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info Section */}
        <div className="space-y-8">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
              We are here to assist you with any inquiries or support.
            </p>
            {locationData.map((location, index) => (
              <div
                key={index}
                className="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-3 mb-3"
              >
                <div className="flex items-center space-x-2 text-blue-900 dark:text-white">
                  <FaMapMarkerAlt className="text-xl" />
                  <p className="text-base font-medium">{location.address}</p>
                </div>
                <div className="flex items-center space-x-2 text-blue-900 dark:text-white">
                  <FaPhoneAlt className="text-xl" />
                  <p className="text-base">{location.phone}</p>
                </div>
                <div className="flex items-center space-x-2 text-blue-900 dark:text-white">
                  <FaEnvelope className="text-xl" />
                  <p className="text-base">{location.email}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Embedded Map */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg h-56 lg:h-72"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Ocean%20Connecting%20sarl)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
              allowFullScreen=""
              title="Office Location"
            ></iframe>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-500 transform hover:-translate-y-1 h-full flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
            Contact Us
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex-grow flex flex-col"
          >
            <div className="flex-grow space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 dark:border-gray-600 placeholder-transparent focus:outline-none focus:border-blue-500 transition bg-white dark:bg-gray-800"
                  placeholder="Full Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3 text-gray-600 dark:text-gray-400 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 dark:border-gray-600 placeholder-transparent focus:outline-none focus:border-blue-500 transition bg-white dark:bg-gray-800"
                  placeholder="Email Address"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3 text-gray-600 dark:text-gray-400 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 dark:border-gray-600 placeholder-transparent focus:outline-none focus:border-blue-500 transition bg-white dark:bg-gray-800"
                  placeholder="Subject"
                  required
                />
                <label
                  htmlFor="subject"
                  className="absolute left-0 -top-3 text-gray-600 dark:text-gray-400 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="peer min-h-[200px] w-full border-b-2 border-gray-300 dark:border-gray-600 placeholder-transparent focus:outline-none focus:border-blue-500 transition bg-white dark:bg-gray-800"
                  placeholder="Message"
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3 text-gray-600 dark:text-gray-400 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 transition-all duration-200"
                >
                  Message
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-white">
              Success!
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Your message has been submitted successfully.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
