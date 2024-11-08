"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const WhyLearnWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <section className="relative bg-blue-50 pt-12 pb-0 overflow-hidden min-h-screen">
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

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image with Circles and Animation */}
        <div className="relative flex justify-center items-center animate-fade-up-delayed">
          {/* Larger Circle Behind Image */}
          <div className="absolute w-[420px] h-[420px] bg-indigo-200 rounded-full bottom-0 right-0 z-0 animate-pulse-slow"></div>
          {/* Smaller Circle Behind Image */}
          <div className="absolute w-[300px] h-[300px] bg-indigo-400 rounded-full top-10 right-12 z-0 animate-pulse-slow"></div>

          {/* Image centered on top of the circles */}
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fimagee-6CHT7KZ-768x1133.png?alt=media&token=bf6a488e-d083-4757-b34e-e9590e61f251"
            alt="Why Learn With Us"
            width={350}
            height={450}
            className={`object-contain relative z-10 transition-transform duration-700 ease-in-out transform ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          />
        </div>

        {/* Right Side: Content */}
        <div
          className={`space-y-4 transition-opacity duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-blue-600 font-semibold text-md">Join With Us</h3>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Find Out Why You Should Learn With Us
          </h1>
          <p className="text-gray-600 text-sm">
            Enhance your language skills and discover new cultures with our comprehensive language courses.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-blue-900">
                    Language Proficiency Test
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Take a test to assess your current skill level and choose the right course.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-blue-900">
                    Select Your Language Course
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Choose from English, Spanish, French, German, and Italian courses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-blue-900">
                    Improve Language Skills
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Develop your speaking, listening, reading, and writing abilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-blue-900">
                    Explore Culture
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Dive into the culture of your chosen language to enhance learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnWithUs;
