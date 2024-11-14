"use client";
import React, { useState, useEffect } from "react";
import LearnItalieContent from './LearnItalieContent';
import LearnItalieFaQ from "../LearnItalieFaQ";
import LearnItalieModel from "../LearnItalieModel";
import Navbar from "../../header/navbar";
import Footer from "../../header/Footer";

const LearnItalie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [years, setYears] = useState(0);
  const [recommendedPercentage, setRecommendedPercentage] = useState(0);
  const [students, setStudents] = useState(0);

  useEffect(() => {
    // Increment numbers smoothly
    const incrementValue = (end, setter) => {
      let start = 0;
      const stepTime = Math.floor(2000 / end);
      const timer = setInterval(() => {
        start++;
        setter(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    };

    incrementValue(10, setYears);
    incrementValue(96, setRecommendedPercentage);
    incrementValue(150, setStudents);
  }, []);

  const scrollToOurCourses = () => {
    const section = document.getElementById("OurCourses");
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="learn-italian-page" style={{ fontFamily: '"Public Sans", sans-serif' }}>
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
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flittle-girl-boy-holding-fla_1089479-3423.jpg?alt=media&token=31a4c34b-b407-4467-97f1-758cd66e21df")`,
        }}
      >
        <div className="overlay absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto relative z-10 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Learn Italian Online with Professional Instructors
          </h1>
          <p className="text-lg md:text-1xl mb-8 max-w-2xl">
            Your Italian progress is what matters the most to us. If you're not satisfied after 12 weeks of learning, you get your money back.
          </p>
          <button
            onClick={scrollToOurCourses}
            className="bg-green-600 hover:bg-red-700 text-white py-3 px-8 rounded-full text-lg transition-colors duration-300 ease-in-out"
          >
            Start Now
          </button>

          {/* Stats Section */}
          <div className="mt-10 flex flex-col md:flex-row justify-between w-full max-w-4xl text-left text-white items-start stats">
            {/* Years of Experience */}
            <div className="flex flex-col items-start mb-6 md:mr-8">
              <div className="flex items-baseline">
                <h3 className="font-bold" style={{ fontSize: "42px", color: "#65A662" }}>{years}</h3>
                <span style={{ color: "#FFFFFF", fontSize: "26px", marginLeft: "8px" }}>Years</span>
              </div>
              <p className="text-sm mt-0" style={{ textAlign: "left" }}>of excellence in education</p>
            </div>

            {/* Divider */}
            <div className="divider-line h-12 border-l-2 border-white mx-8 md:block"></div>

            {/* Recommended Percentage */}
            <div className="flex flex-col items-start mb-6 md:mr-8">
              <div className="flex items-baseline">
                <h3 className="font-bold" style={{ fontSize: "42px", color: "#65A662" }}>{recommendedPercentage}%</h3>
                <span style={{ color: "#FFFFFF", fontSize: "26px", marginLeft: "8px" }}>Recommended</span>
              </div>
              <p className="text-sm mt-0" style={{ textAlign: "left" }}>Recommended by students</p>
            </div>

            {/* Divider */}
            <div className="divider-line h-12 border-l-2 border-white mx-8 md:block"></div>

            {/* Number of Students */}
            <div className="flex flex-col items-start mb-6">
              <div className="flex items-baseline">
                <h3 className="font-bold" style={{ fontSize: "42px", color: "#65A662" }}>{students.toLocaleString()}</h3>
                <span style={{ color: "#FFFFFF", fontSize: "26px", marginLeft: "8px" }}>Students</span>
              </div>
              <p className="text-sm mt-0" style={{ textAlign: "left" }}>Students from 100 countries</p>
            </div>
          </div>
        </div>
      </section>

      <LearnItalieContent />
      <LearnItalieFaQ />
      <LearnItalieModel />

      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
      <Footer />
    </div>
  );
};

export default LearnItalie;
