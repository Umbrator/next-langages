"use client";

import React, { useState, useEffect } from "react";
import LearnSpainContent from "./LearnSpainContent";
import LearnSpainFaQ from "../LearnSpainFaQ";
import LearnSpainModel from "../LearnSpainModel";
import Navbar from "../../header/navbar";
import Footer from "../../header/Footer";

const LearnSpain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState({
    years: 0,
    recommendedPercentage: 0,
    students: 0,
  });
  const [textContent, setTextContent] = useState({
    yearsText: "",
    recommendedText: "",
    studentsText: "",
    headlineText: "",
  });

  useEffect(() => {
    const animateCounter = (start, end, key, duration) => {
      let current = start;
      const stepTime = Math.abs(Math.floor(duration / (end - start)));
      const timer = setInterval(() => {
        current += 1;
        setStats((prevStats) => ({ ...prevStats, [key]: current }));
        if (current === end) clearInterval(timer);
      }, stepTime);
    };

    const animateText = (text, key, delay) => {
      let index = 0;
      const timer = setInterval(() => {
        setTextContent((prevText) => ({
          ...prevText,
          [key]: text.slice(0, index + 1),
        }));
        index += 1;
        if (index === text.length) clearInterval(timer);
      }, delay);
    };

    animateCounter(0, 10, "years", 2000);
    animateCounter(0, 96, "recommendedPercentage", 2000);
    animateCounter(0, 150, "students", 2000);

    setTimeout(
      () => animateText("of excellence in education", "yearsText", 50),
      500
    );
    setTimeout(
      () => animateText("Recommended by students", "recommendedText", 50),
      1000
    );
    setTimeout(
      () => animateText("Students from 100 countries", "studentsText", 50),
      1500
    );
    animateText(
      "Learn Spanish Online with Professional Instructors",
      "headlineText",
      50
    );
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="learn-spain-page"
      style={{ fontFamily: '"Public Sans", sans-serif' }}
    >
      <Navbar />
      <style jsx>{`
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 1.8rem !important;
          }
          .hero p,
          .hero button {
            font-size: 0.9rem !important;
          }
          .stats h3 {
            font-size: 28px !important;
          }
          .stats span {
            font-size: 18px !important;
          }
          .divider-line {
            display: none !important;
          }
        }
      `}</style>

      <section
        className="hero bg-cover bg-center h-screen text-white relative flex items-center pt-20"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/woman-holding-spanish-flag-portrait_1234220-54869.jpg?w=1060")`,
        }}
      >
        <div className="overlay absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="container mx-auto relative z-10 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-5xl font-bold mb-4 text-white">
            {textContent.headlineText}
          </h1>

          <p className="text-lg md:text-1xl mb-8 max-w-2xl text-gray-300">
            Your Spanish learning progress is what matters the most to us. If
            you're not satisfied after 12 weeks of learning, you get your money
            back.
          </p>

          <button
            onClick={() => scrollToSection("OurCourses")}
            className="bg-red-600 hover:bg-yellow-500 text-white py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Start Now
          </button>

          {/* Stats Section */}
          <div className="mt-10 flex flex-col md:flex-row justify-between w-full max-w-4xl text-left text-white items-start stats">
            <div className="flex flex-col items-start mb-6 md:mr-8">
              <div className="flex items-baseline">
                <h3
                  className="font-bold"
                  style={{
                    fontSize: "42px",
                    color: "#FFD700",
                    fontFamily: '"Public Sans", sans-serif',
                  }}
                >
                  {stats.years}
                </h3>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "26px",
                    marginLeft: "8px",
                    fontFamily: '"Public Sans", sans-serif',
                  }}
                >
                  Years
                </span>
              </div>
              <p
                className="text-sm mt-0 text-gray-300"
                style={{ textAlign: "left" }}
              >
                {textContent.yearsText}
              </p>
            </div>

            <div className="divider-line h-12 border-l-2 border-white mx-8 md:block"></div>

            <div className="flex flex-col items-start mb-6 md:mr-8">
              <div className="flex items-baseline">
                <h3
                  className="font-bold"
                  style={{
                    fontSize: "42px",
                    color: "#FFD700",
                    fontFamily: '"Public Sans", sans-serif',
                  }}
                >
                  {stats.recommendedPercentage}%
                </h3>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "26px",
                    marginLeft: "8px",
                    fontFamily: '"Public Sans", sans-serif',
                  }}
                >
                  Recommended
                </span>
              </div>
              <p
                className="text-sm mt-0 text-gray-300"
                style={{ textAlign: "left" }}
              >
                {textContent.recommendedText}
              </p>
            </div>

            <div className="divider-line h-12 border-l-2 border-white mx-8 md:block"></div>

            <div className="flex flex-col items-start mb-6">
              <div className="flex items-baseline">
                <h3
                  className="font-bold"
                  style={{
                    fontSize: "42px",
                    color: "#FFD700",
                    fontFamily: '"Public Sans", sans-serif',
                  }}
                >
                  {stats.students.toLocaleString()}
                </h3>
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "26px",
                    marginLeft: "8px",
                    fontFamily: '"Public Sans", sans-serif',
                  }}
                >
                  Students
                </span>
              </div>
              <p
                className="text-sm mt-0 text-gray-300"
                style={{ textAlign: "left" }}
              >
                {textContent.studentsText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <LearnSpainContent />
      <LearnSpainFaQ />
      <LearnSpainModel />

      {isModalOpen && <Modal closeModal={closeModal} />}
      <Footer />
    </div>
  );
};

export default LearnSpain;
