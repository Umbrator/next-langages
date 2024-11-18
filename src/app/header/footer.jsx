import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaAt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto">
        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Services Section */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Learn English</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Learn French</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Learn Spanish</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Learn Italian</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Learn German</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Learn For Kids</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Consulting</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Exam preparation</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Online learning</a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Announcements</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Knowledgebase</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Terms of Use</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Network Status</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Testimonial</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Support</a>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-400 mr-2">•</span> 
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col items-center space-y-4">
            {/* Location Info */}
            <div className="flex flex-col items-center mb-4">
              <img 
                src="https://howdycode.com/templates/howdycode/img/flags/morocco-map.png" 
                alt="Morocco Map" 
                className="w-35 h-35"
              />
              <p className="text-center text-gray-300">Proudly based in Morocco!</p>
            </div>

            {/* Email Box */}
            <div className="relative bg-white text-blue-900 p-4 rounded-lg shadow-md w-full text-center">
              <p className="text-xs font-bold">EMAIL US:</p>
              <p className="text-sm">oceanconnecting.ma@gmail.com</p>
              <FaAt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-200 text-4xl" />
            </div>

            {/* Call Us Box */}
            <div className="relative bg-white text-blue-900 p-4 rounded-lg shadow-md w-full text-center">
              <p className="text-xs font-bold">CALL US:</p>
              <p className="text-sm">+212-704309787</p>
              <FaPhoneAlt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-200 text-4xl" />
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8 mb-4">
          <a href="https://www.linkedin.com/company/ocean-connecting/mycompany/" className="text-gray-300 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/the.ocean.connecting/" className="text-gray-300 hover:text-white">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/oceanconnecting.ma/" className="text-gray-300 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://x.com/theoceansteam?lang=ar" className="text-gray-300 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B212704309787" className="text-gray-300 hover:text-white">
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-gray-500 mt-8">
          <p>Copyright © 2024 Howdy Code. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
