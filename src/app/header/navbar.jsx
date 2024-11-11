"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const router = useRouter();

  const mainLinks = [
    { href: "/", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const learnLinks = [
    { href: "/spain/learn", label: "Spanish", icon: "fi fi-es" },
    { href: "/french/learn", label: "French", icon: "fi fi-fr" },
    { href: "/german/learn", label: "German", icon: "fi fi-de" },
    { href: "/italie/learn", label: "Italian", icon: "fi fi-it" },
    { href: "/english/learn", label: "English", icon: "fi fi-gb" },
  ];

  const scrollToCourseSection = () => {
    const courseSection = document.getElementById("CourseSection");
    if (courseSection) {
      courseSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      scrollToCourseSection();
    } else {
      router.push("/#CourseSection");
    }
  };

  // Opens dropdown immediately
  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current); // Clear any existing timeout
    setDropdownOpen(true);
  };

  // Closes dropdown with a delay
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 200); // Delay of 200ms
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link href="/" passHref>
            <Image
              src="/ocean.svg"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-600 hover:text-blue-600 flex items-center transition duration-300 ease-in-out">
                Learn
                <svg
                  className={`w-5 h-5 ml-1 transform transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out"
                  onMouseEnter={handleMouseEnter} // Keep open if mouse enters dropdown
                  onMouseLeave={handleMouseLeave} // Delay close if mouse leaves dropdown
                >
                  {learnLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      <span
                        className={`${link.icon} mr-2`}
                        style={{ fontSize: "1.2rem" }}
                      ></span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Get Started Button */}
          <button
            onClick={handleGetStartedClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-2 bg-white shadow-lg p-4">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="text-gray-600 hover:text-blue-600 transition px-2 py-1">
              Learn
              {learnLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center mt-2"
                >
                  <span
                    className={`${link.icon} mr-2`}
                    style={{ fontSize: "1.2rem" }}
                  ></span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
