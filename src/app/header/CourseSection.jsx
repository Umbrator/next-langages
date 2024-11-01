"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const CourseSection = () => {
  const courses = [
    {
      image: "https://www.upload.ee/image/17257067/home-bg-1-1.jpg",
      title: "Learn English",
      description: "Learn essential English language skills for beginners.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      link: "/english/learn",
    },
    {
      image: "https://www.upload.ee/image/17257068/home-bg-6.jpg",
      title: "Learn Spanish",
      description: "Improve your Spanish with interactive exercises.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
      link: "/Spain/learn",
    },
    {
      image: "https://www.upload.ee/image/17257069/home-bg-4-1.jpg",
      title: "Learn German",
      description: "Master German with our intensive language program.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      link: "/german/learn",
    },
    {
      image: "https://www.upload.ee/image/17257067/home-bg-1-1.jpg",
      title: "Learn Italian",
      description: "Start speaking Italian from day one.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
      link: "/italie/learn",
    },
    {
      image: "https://www.upload.ee/image/17257068/home-bg-6.jpg",
      title: "Learn French",
      description: "Elevate your French language skills.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      link: "/french/learn",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const revealCards = () => {
      courses.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 200);
      });
    };
    revealCards();
  }, [courses]);

  return (
    <section className="py-16 bg-with">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Language Courses
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-lg mx-auto">
          Explore our top language courses, designed to help you master new languages with ease.
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link href={course.link} key={index} passHref>
              <div
                className={`relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                {/* Flag Icon in Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-300 z-10 overflow-hidden">
                  <Image
                    src={course.countryFlag}
                    alt={`${course.title} Flag`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>

                {/* Course Image */}
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 opacity-70"
                  />
                </div>

                <div className="p-6 pt-16">
                  {/* Course Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                    {course.title}
                  </h3>
                  {/* Course Description */}
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {course.description}
                  </p>
                  {/* Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 mt-4 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-500">
                    Start Learning
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
