"use client";
import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter instead of useNavigate

const CoursesSection = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter(); // Initialize useRouter instead of useNavigate

  // Simulate fetching data and trigger the animation after a short delay
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200); // Slight delay for visual effect
  }, []);

  // Course Data
  const courses = [
    // Your courses data here
  ];

  return (
    <section className="py-16 bg-white">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="ml-2" style={{ color: "#000000" }} /> {/* Black arrow icon */}
          COURSES
        </h3>
        <h2 className="text-4xl font-bold text-black mb-4">Our German Courses</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in German.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="relative w-full">
              <img
                className={`w-full h-48 object-cover transition-opacity transition-transform duration-1000 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                src={course.img}
                alt={course.title}
              />
              {/* Navigate to the details page when the button is clicked */}
              <button
                onClick={() => router.push(`/CourseDetails/${course.id}`)} // Use router.push to navigate
                className="absolute top-3 left-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-black transition duration-300 ease-in-out"
              >
                ➤ LEARN MORE
              </button>
            </div>
            <div className="pb-12 w-full">
              <h3 className="text-xl font-semibold text-black mt-4">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
