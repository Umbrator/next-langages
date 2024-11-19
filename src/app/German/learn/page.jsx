"use client";
import React, { useState, useEffect } from "react";
import LearnGermanContent from "./LearnGermanContent";
import LearnGermanFaQ from "../LearnGermanFaQ";
import LearnGermanModel from "../LearnGermanModel";
import Navbar from "../../header/navbar";
import Footer from "../../header/Footer";

const LearnGerman = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Stats state variables grouped in one object
  const [stats, setStats] = useState({
    years: 0,
    recommendedPercentage: 0,
    students: 0,
    yearsText: "",
    recommendedText: "",
    studentsText: "",
  });

  const [headlineText, setHeadlineText] = useState("");

  useEffect(() => {
    const incrementNumber = (start, end, key, duration) => {
      let current = start;
      const stepTime = Math.floor(duration / (end - start));
      const timer = setInterval(() => {
        current += 1;
        setStats((prevStats) => ({ ...prevStats, [key]: current }));
        if (current === end) clearInterval(timer);
      }, stepTime);
    };

    const animateText = (text, key, delay) => {
      let currentText = "";
      let index = 0;
      const timer = setInterval(() => {
        currentText += text[index];
        setStats((prevStats) => ({ ...prevStats, [key]: currentText }));
        index += 1;
        if (index === text.length) clearInterval(timer);
      }, delay);
    };

    incrementNumber(0, 10, "years", 2000);
    incrementNumber(0, 96, "recommendedPercentage", 2000);
    incrementNumber(0, 150, "students", 2000);

    // Animating the texts with delay
    setTimeout(() => animateText("of excellence in education", "yearsText", 50), 500);
    setTimeout(() => animateText("Recommended by students", "recommendedText", 50), 1000);
    setTimeout(() => animateText("Students from 100 countries", "studentsText", 50), 1500);

    // Headline text animation
    const animateHeadlineText = (text, setter, delay) => {
      let currentText = "";
      let index = 0;
      const timer = setInterval(() => {
        currentText += text[index];
        setter(currentText);
        index += 1;
        if (index === text.length) clearInterval(timer);
      }, delay);
    };
    animateHeadlineText("Learn German Online with Professional Instructors", setHeadlineText, 50);
  }, []);

  const scrollToOurCourses = () => {
    const ourCoursesSection = document.getElementById("OurCourses");
    if (ourCoursesSection) {
      ourCoursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="learn-english-page" style={{ fontFamily: '"Public Sans", sans-serif' }}>
      <Navbar />

      <style jsx>{`
        @media (max-width: 768px) {
          .hero h1 { font-size: 1.8rem !important; }
          .hero p, .hero button { font-size: 0.9rem !important; }
          .stats h3 { font-size: 28px !important; }
          .stats span { font-size: 18px !important; }
          .divider-line { display: none !important; }
        }
      `}</style>

      <section
        className="hero bg-cover bg-center h-screen text-white relative flex items-center pt-20"
        style={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Feducation-foreign-school-teen-girl-football-fan-choose-direction-happy-child-pointing-finger_545934-19162.jpg?alt=media&token=c4abfbca-595c-48a1-b849-360ff3c2af32")`,
        }}
      >
        <div className="overlay absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="container mx-auto relative z-10 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-5xl font-bold mb-4 text-white">
            {headlineText}
          </h1>

          <p className="text-lg md:text-1xl mb-8 max-w-2xl text-gray-300">
            Your German learning progress is what matters the most to us. If
            you're not satisfied after 12 weeks of learning, you get your money
            back.
          </p>

          <button
            onClick={scrollToOurCourses}
            className="bg-red-600 hover:bg-yellow-500 text-white py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Start Now
          </button>

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
              <p className="text-sm mt-0 text-gray-300" style={{ textAlign: "left" }}>
                {stats.yearsText}
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
              <p className="text-sm mt-0 text-gray-300" style={{ textAlign: "left" }}>
                {stats.recommendedText}
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
              <p className="text-sm mt-0 text-gray-300" style={{ textAlign: "left" }}>
                {stats.studentsText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <LearnGermanContent />
      <LearnGermanFaQ />
      <LearnGermanModel />

      {isModalOpen && <Modal closeModal={closeModal} />}
      <Footer />
    </div>
  );
};

export default LearnGerman;
