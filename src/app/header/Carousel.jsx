"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

const Carousel = () => {
  const slides = useMemo(
    () => [
      {
        title: "Learn New Languages  and Move  Forward",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fimage-JA74V7F-768x1054.png?alt=media&token=0080c1ec-ad15-496d-96e9-e74abd5984d3",
        button1: "Get Started",
        button2: "Watch Intro",
        features: [
          { title: "60+", description: "Interactive Courses" },
          { title: "1250+", description: "Activate Students" },
          { title: "Get 20% Disc Off", description: "On Every Course" },
        ],
      },
    ],
    []
  );

  const [currentIndex] = useState(0);

  return (
    <section className="relative bg-blue-50 pt-32 py-16 overflow-hidden min-h-screen">
      {/* SVG Wave Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#e0f2ff"
            fillOpacity="1"
            d="M0,64L40,80C80,96,160,128,240,154.7C320,181,400,203,480,202.7C560,203,640,181,720,176C800,171,880,181,960,186.7C1040,192,1120,192,1200,186.7C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight relative overflow-hidden">
            <span className="block animate-typing">
              {slides[currentIndex].title.split(" ").map((word, i) => {
                if (word === "Languages" || word === "Move") {
                  return (
                    <span
                      key={i}
                      className="italic underline decoration-blue-500 inline-block animate-underline"
                    >
                      {word}{" "}
                    </span>
                  );
                }
                return word + " ";
              })}
            </span>
          </h1>
          <p className="text-gray-600 text-lg italic animate-fade-in">
            {slides[currentIndex].subtitle}
          </p>

          <div className="flex space-x-4 mt-6 animate-fade-in-delayed">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 hover:scale-105 shadow-lg transform transition duration-300">
              {slides[currentIndex].button1}
            </button>
            <button className="flex items-center text-blue-900 font-medium py-3 px-6 hover:text-blue-700 hover:scale-105 transform transition duration-300">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555.832v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11.5A7.5 7.5 0 114.5 11.5"
                ></path>
              </svg>
              {slides[currentIndex].button2}
            </button>
          </div>
        </div>

        {/* Right Side: Image and Floating Features */}
        <div className="relative flex justify-center items-center animate-fade-up-delayed">
          <div className="absolute w-[420px] h-[420px] bg-indigo-200 rounded-full bottom-0 right-0 z-0 animate-pulse-slow"></div>
          <div className="absolute w-[300px] h-[300px] bg-indigo-400 rounded-full top-10 right-12 z-0 animate-pulse-slow"></div>

          <Image
            src={slides[currentIndex].image}
            alt="Learn Languages"
            width={350}
            height={450}
            priority
            quality={75}
            className="object-contain relative z-10 transition-transform duration-700 ease-in-out transform scale-100"
          />

          <div className="absolute top-5 right-0 w-[180px] p-4 bg-white rounded-lg shadow-lg z-20 transition-all transform hover:scale-105 hover:shadow-2xl animate-fade-up delay-[500ms]">
            <p className="text-blue-900 font-bold">60+</p>
            <p className="text-gray-500">Interactive Courses</p>
          </div>
          <div className="absolute bottom-16 left-0 w-[180px] p-4 bg-white rounded-lg shadow-lg z-20 transition-all transform hover:scale-105 hover:shadow-2xl animate-fade-up delay-[800ms]">
            <p className="text-blue-900 font-bold">1250+</p>
            <p className="text-gray-500">Activate Students</p>
          </div>
          <div className="absolute bottom-5 right-0 w-[220px] p-4 bg-white rounded-lg shadow-lg z-20 transition-all transform hover:scale-105 hover:shadow-2xl animate-fade-up delay-[1100ms]">
            <p className="text-blue-900 font-bold">Get 20% Disc Off</p>
            <p className="text-gray-500">On Every Course</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
