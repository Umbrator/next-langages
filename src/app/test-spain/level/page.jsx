"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../header/navbar";
import Footer from "../../header/Footer";
import Ex1 from "../Ex1";
import Ex2 from "../Ex2";
import Ex3 from "../Ex3";
import Ex4 from "../Ex4";
import Ex5 from "../Ex5";
import Levels from "../Levels";
import TestCompleteModal from "../TestCompleteModal";

const Page = () => {
  // Unique namespace for Spain test local storage data
  const localStorageNamespace = "spain_test";

  const [currentStep, setCurrentStep] = useState(1);
  const [scores, setScores] = useState({
    ex1: 0,
    ex2: 0,
    ex3: 0,
    ex4: 0,
    ex5: 0,
  });
  const [unlockedLevels, setUnlockedLevels] = useState({
    A1: true,
    A2: false,
    B1: false,
    B2: false,
    C1: false,
  });
  const [showNotQualifiedModal, setShowNotQualifiedModal] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(19);

  useEffect(() => {
    // Load data from local storage specific to the Spain test
    const savedData = localStorage.getItem(localStorageNamespace);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setCurrentStep(parsedData.currentStep || 1);
      setScores(parsedData.scores || {});
      setUnlockedLevels(parsedData.unlockedLevels || {});
      setRemainingAttempts(parsedData.remainingAttempts || 19);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage specific to the Spain test
    const dataToSave = {
      currentStep,
      scores,
      unlockedLevels,
      remainingAttempts,
    };
    localStorage.setItem(localStorageNamespace, JSON.stringify(dataToSave));
  }, [currentStep, scores, unlockedLevels, remainingAttempts]);

  const handleScoreUpdate = (exercise, score) => {
    setScores((prevScores) => ({ ...prevScores, [exercise]: score }));
  };

  const handleAttemptDecrease = () => {
    setRemainingAttempts((prev) => prev - 1);
    if (remainingAttempts <= 1) setShowNotQualifiedModal(true);
  };

  const nextStep = () => {
    const currentExercise = `ex${currentStep}`;
    const requiredScore = 6;

    if (scores[currentExercise] >= requiredScore) {
      let nextLvl;
      switch (currentStep) {
        case 1:
          nextLvl = "A2";
          break;
        case 2:
          nextLvl = "B1";
          break;
        case 3:
          nextLvl = "B2";
          break;
        case 4:
          nextLvl = "C1";
          break;
        default:
          nextLvl = "";
      }

      setUnlockedLevels((prev) => ({ ...prev, [nextLvl]: true }));
      if (currentStep < 6) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setShowFinalModal(true);
      }
    } else {
      setShowNotQualifiedModal(true);
    }
  };

  const closeNotQualifiedModal = () => {
    setShowNotQualifiedModal(false);
  };

  const totalScore = Object.values(scores).reduce(
    (total, score) => total + score,
    0
  );

  const renderExercise = () => {
    switch (currentStep) {
      case 1:
        return (
          <Ex1
            onScoreUpdate={(score) => handleScoreUpdate("ex1", score)}
            nextStep={nextStep}
            remainingAttempts={remainingAttempts}
            handleAttemptDecrease={handleAttemptDecrease}
          />
        );
      case 2:
        return (
          unlockedLevels.A2 && (
            <Ex2
              onScoreUpdate={(score) => handleScoreUpdate("ex2", score)}
              nextStep={nextStep}
              remainingAttempts={remainingAttempts}
              handleAttemptDecrease={handleAttemptDecrease}
            />
          )
        );
      case 3:
        return (
          unlockedLevels.B1 && (
            <Ex3
              onScoreUpdate={(score) => handleScoreUpdate("ex3", score)}
              nextStep={nextStep}
              remainingAttempts={remainingAttempts}
              handleAttemptDecrease={handleAttemptDecrease}
            />
          )
        );
      case 4:
        return (
          unlockedLevels.B2 && (
            <Ex4
              onScoreUpdate={(score) => handleScoreUpdate("ex4", score)}
              nextStep={nextStep}
              remainingAttempts={remainingAttempts}
              handleAttemptDecrease={handleAttemptDecrease}
            />
          )
        );
      case 5:
        return (
          unlockedLevels.C1 && (
            <Ex5
              onScoreUpdate={(score) => handleScoreUpdate("ex5", score)}
              nextStep={nextStep}
              remainingAttempts={remainingAttempts}
              handleAttemptDecrease={handleAttemptDecrease}
            />
          )
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />
      <main className="pt-20 max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
          <h1 className="text-4xl font-semibold mb-6 text-center text-[#FF5733]">
            Spain Language Proficiency Test
          </h1>
          <div className="w-full bg-gray-300 rounded-full h-3 mb-6 shadow-lg overflow-hidden relative">
            <div
              className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] h-full rounded-full shadow-lg transition-all duration-700 ease-in-out"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
          <Levels currentStep={currentStep} unlockedLevels={unlockedLevels} scores={scores} />

          <div className="transition-container fade-in mt-6">
            {renderExercise()}
          </div>
        </div>

        {showNotQualifiedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full text-center animated-modal">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Not Qualified</h2>
              <p className="text-md text-gray-700 mb-3">
                Your current level is{" "}
                {currentStep === 1
                  ? "A1"
                  : currentStep === 2
                  ? "A2"
                  : currentStep === 3
                  ? "B1"
                  : currentStep === 4
                  ? "B2"
                  : "C1"}
                .
              </p>
              <p className="text-md text-gray-700 mb-3">
                Please visit our center for guidance to prepare for the next level.
              </p>
              <button
                onClick={closeNotQualifiedModal}
                className="bg-red-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-600 transform transition-transform duration-300 hover:scale-105"
              >
                Stay at this Level
              </button>
            </div>
          </div>
        )}

        {showFinalModal && <TestCompleteModal totalScore={totalScore} />}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
