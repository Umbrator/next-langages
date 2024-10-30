import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHandshake, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    issue: '',
    email: '',
    contact: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (formData.contact && !validatePhone(formData.contact)) newErrors.contact = 'Enter a 10-digit contact number';
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    alert('Form submitted successfully!');
    setFormData({ issue: '', email: '', contact: '', message: '' });
  };

  // Map settings
  const mapContainerStyle = { width: '100%', height: '300px' };
  const center = { lat: 28.567165, lng: 77.321895 }; // Coordinates for Noida, India
  const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual Google Maps API key

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Social Media Icons */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3">
        <button className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-r-full">
          <FaFacebook aria-label="Facebook" />
        </button>
        <button className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center rounded-r-full">
          <FaInstagram aria-label="Instagram" />
        </button>
        <button className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-r-full">
          <FaYoutube aria-label="YouTube" />
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info Cards */}
        <div className="space-y-8">
          {/* Reach Us At */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reach Us At</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><FaPhoneAlt className="mr-2" /> +91-9998887776</li>
              <li className="flex items-center"><FaEnvelope className="mr-2" /> feedback@geeksforgeeks.org</li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida</li>
            </ul>
          </div>

          {/* Branding & Collaboration */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Branding & Collaboration</h3>
            <div className="flex items-center justify-center mb-4">
              <FaHandshake className="text-2xl text-blue-500" />
            </div>
            <div className="text-gray-700">
              <div className="flex items-center"><FaEnvelope className="mr-2" /> branding@geeksforgeeks.org</div>
              <div className="flex items-center mt-2"><FaMapMarkerAlt className="mr-2" /> A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida</div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
            <LoadScript googleMapsApiKey={googleMapsApiKey} language="en">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Feedback & Queries</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="issue" className="text-sm font-medium text-gray-700">Select Issue*</label>
              <select
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">-- Select Your Query --</option>
                <option value="Feedback">Feedback</option>
                <option value="Course Related Queries">Course Related Queries</option>
                <option value="Payment Related Issue">Payment Related Issue</option>
                <option value="Hiring Related Queries">Hiring Related Queries</option>
                <option value="Advertise With Us">Advertise With Us</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contact" className="text-sm font-medium text-gray-700">Contact No.</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
              {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Drop Your Query</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="15"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                placeholder="Max Allowed Characters: 300"
                maxLength="300"
              ></textarea>
            </div>

            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors mb-0">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
