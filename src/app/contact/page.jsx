"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../header/navbar";
import Footer from "../header/Footer";
import OfflineChat from "../header/OfflineChat";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    issue: "",
    email: "",
    contact: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!validateEmail(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (formData.contact && !validatePhone(formData.contact))
      newErrors.contact = "Enter a 10-digit contact number";
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    setSubmitted(true);
    setFormData({ issue: "", email: "", contact: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800 ">
      <Navbar />

      {/* Image Banner Below Navbar */}
      <div className="w-full">
        <img
          src="https://img.freepik.com/premium-photo/business-people-wearing-headset-working-office-support-remote-customer-colleague-call-center-telemarketing-customer-support-agent-provide-service-telephone-video-conference-oratory-call_31965-245544.jpg?w=1380"
          alt="Contact Us Banner"
          className="w-full max-h-[500px] object-cover" // Limits the max height to 200 pixels
        />
      </div>

      {/* Main Content Area with Padding and Width Adjustment */}
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-8 max-w-6xl">
          <header className="text-center mb-14">
            <h1 className="text-4xl font-extrabold text-blue-900">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              We're here to help with any inquiries or feedback you have.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <section className="p-8 bg-white shadow-md rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-center space-x-4">
                    <FaPhoneAlt className="text-blue-600" />
                    <span>+91-9998887776</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaEnvelope className="text-blue-600" />
                    <span>feedback@geeksforgeeks.org</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>A-143, 9th Floor, Sector-136, Noida</span>
                  </li>
                </ul>
              </section>

              {/* Social Links */}
              <section className="flex justify-evenly space-x-6">
                {[
                  { href: "#", icon: FaFacebook, color: "bg-blue-700" },
                  { href: "#", icon: FaInstagram, color: "bg-pink-500" },
                  { href: "#", icon: FaYoutube, color: "bg-red-600" },
                ].map(({ href, icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-12 h-12 ${color} text-white rounded-full flex items-center justify-center transition transform hover:scale-105`}
                  >
                    <Icon />
                  </a>
                ))}
              </section>

              {/* Embedded Map */}
              <section className="p-8 bg-white shadow-md rounded-xl">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Location
                </h2>
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Ocean%20Connecting%20sarl)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </section>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-10 shadow-lg rounded-xl space-y-8"
            >
              <h2 className="text-3xl font-semibold text-gray-900">
                Send a Message
              </h2>
              <div>
                <label htmlFor="issue" className="text-sm font-medium">
                  Issue Type*
                </label>
                <select
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select...</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Course Related Queries">
                    Course Related Queries
                  </option>
                  <option value="Payment Related Issue">
                    Payment Related Issue
                  </option>
                  <option value="Hiring Related Queries">
                    Hiring Related Queries
                  </option>
                  <option value="Advertise With Us">Advertise With Us</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact" className="text-sm font-medium">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {errors.contact && (
                  <p className="text-red-600 text-xs mt-1">{errors.contact}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 block w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  maxLength="300"
                  required
                  placeholder="Enter your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition hover:bg-blue-700 transform hover:scale-105"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 text-center mt-4">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <OfflineChat/>
    </div>
  );
}
