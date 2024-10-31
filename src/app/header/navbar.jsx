"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center space-x-2">
            <Link href="/" passHref>
              <Image
                src="/ocean.png"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </Link>
          </div>

          <div
            className={`hidden md:flex space-x-8 items-center transition-all duration-500 ease-in-out ${
              searchOpen
                ? "opacity-0 invisible translate-y-2"
                : "opacity-100 visible translate-y-0"
            }`}
          >
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Blog
            </Link>

            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 flex items-center transition duration-300 ease-in-out">
                Learn
                <svg
                  className="w-5 h-5 ml-1 transform group-hover:rotate-180 transition-transform duration-300 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out">
                <Link
                  href="/language/spanish"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  Spanish
                </Link>
                <Link
                  href="/language/french"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  French
                </Link>
                <Link
                  href="/language/german"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  German
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {!searchOpen ? (
              <button
                className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
                onClick={() => setSearchOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            ) : (
              <div className="relative w-full md:w-64 transition-all duration-500 ease-in-out">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition-transform duration-300 ease-in-out"
                    placeholder="Enter keywords"
                  />
                  <svg
                    className="absolute left-3 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <button
                    className="ml-2 text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out absolute right-2"
                    onClick={() => setSearchOpen(false)}
                  >
                    &#10006;
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-2 bg-white shadow-lg p-4 transition-all duration-300 ease-in-out">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              Blog
            </Link>
            <Link
              href="/learn"
              className="text-gray-600 hover:text-blue-600 transition px-2 py-1"
            >
              Learn
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;