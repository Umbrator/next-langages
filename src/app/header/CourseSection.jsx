"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const CourseSection = () => {
  const courses = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fstyle-blonde-woman-sitting-table-with-books-around-holds-usa-flag-yellow_87910-6703.jpg?alt=media&token=9f93bb69-19d5-413f-82cc-97c9e254b48a",
      title: "Learn English",
      description: "Learn essential English language skills for beginners.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      link: "/english/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmature-student-smiling-against-spain-flag-grunge-effect_1134-52857.jpg?alt=media&token=6eace9c7-be84-4c26-bbc8-bac9b6453885",
      title: "Learn Spanish",
      description: "Improve your Spanish with interactive exercises.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
      link: "/spain/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpeople-education-learning-school-concept-happy-smiling-teenage-student-girl-with-tablet-pc-folders-german-flag-background_380164-112357.avif?alt=media&token=9c50943b-84d5-4604-bf82-7cbee08b4b93",
      title: "Learn German",
      description: "Master German with our intensive language program.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      link: "/german/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fstudent-studying-from-folders-against-italy-flag-grunge-effect_1134-52825.jpg?alt=media&token=c52e00f8-ab01-4f2f-bcd1-61147cbb01b5",
      title: "Learn Italian",
      description: "Start speaking Italian from day one.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
      link: "/italie/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fyoung-female-student-looking-webcam-talking-studying-teaching_116407-23399.jpg?alt=media&token=51732394-ef74-44b2-8c0e-3ff2f722481a",
      title: "Learn French",
      description: "Elevate your French language skills.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      link: "/french/learn",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll(".course-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-900" ref={sectionRef} id="CourseSection">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <h2 className="text-4xl font-extrabold text-blue-900 dark:text-white mb-6 text-center">
          Language Courses
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-center max-w-lg mx-auto">
          Explore our top language courses, designed to help you master new languages with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link href={course.link} key={index} passHref>
              <div
                className={`course-card relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                data-index={index}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 z-10 overflow-hidden">
                  <Image
                    src={course.countryFlag}
                    alt={`${course.title} Flag`}
                    fill
                    sizes="50px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    className="object-cover w-full h-48 opacity-70"
                  />
                </div>
                <div className="p-6 pt-16">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-center">
                    {course.description}
                  </p>
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
