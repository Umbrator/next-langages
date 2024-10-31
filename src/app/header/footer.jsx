// Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and About Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-indigo-600 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Ocean</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-400">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-400">
              <FaInstagram />
            </a>
            <a href="#" className="bg-indigo-500 p-2 rounded-full text-white hover:bg-indigo-400">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-indigo-600 pb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">Teacher</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-indigo-600 pb-2">Useful Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Disclaimer</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-indigo-600 pb-2">Stay Connected</h4>
          <form className="flex space-x-2 mb-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l-full bg-gray-100 text-gray-800 w-full focus:outline-none"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-full hover:bg-indigo-500">
              Send
            </button>
          </form>
          <div className="text-gray-300">
            <p className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7V7h2v4h2l-3 3-3-3h2z" clipRule="evenodd" />
              </svg>
              <span>Jl. Sunset Road No.815, Kuta</span>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884l8 4.8a1 1 0 001.005 0l8-4.8A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-7.5 4.5V17H9v-4.382l-7.5-4.5L2 6.882l8 4.8 8-4.8 1 .118z" />
              </svg>
              <span>support@domain.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center md:text-left text-gray-500 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0">Ocean Connecting 2024</p>
          <p>Copyright © 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
