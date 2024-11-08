"use client";

import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Ex5 = ({
  onScoreUpdate,
  nextStep,
  remainingAttempts,
  handleAttemptDecrease,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showNotQualifiedModal, setShowNotQualifiedModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const questions = [
    {
      question: "Choose the correct form: 'Had he known about the traffic, he ___ earlier.'",
      options: [
        { text: "would have left", correct: true },
        { text: "would leave", correct: false },
      ],
    },
    {
      question: "Select the sentence that uses 'hardly' correctly.",
      options: [
        { text: "He had entered hardly the room when the phone rang.", correct: false },
        { text: "He had hardly entered the room when the phone rang.", correct: true },
      ],
    },
    {
      question: "What is the correct meaning of the phrase? 'To hit the nail on the head.'",
      options: [
        { text: "To describe something accurately.", correct: true },
        { text: "To misunderstand a situation.", correct: false },
      ],
    },
    {
      question: "Choose the best option to complete the sentence: 'Not only ___ the contract, but she also received a promotion.'",
      options: [
        { text: "did she sign", correct: true },
        { text: "she signed", correct: false },
      ],
    },
    {
      question: "Which option best completes the sentence? 'The witness’s account was inconsistent and full of ___.'",
      options: [
        { text: "contradictory", correct: false },
        { text: "contradictions", correct: true },
      ],
    },
    {
      question: "Which sentence uses the correct tense? 'By this time next year, he ___ his degree.'",
      options: [
        { text: "would complete", correct: false },
        { text: "will have completed", correct: true },
      ],
    },
    {
      question: "What does this sentence imply? 'She was bound to find out eventually.'",
      options: [
        { text: "It was inevitable that she would find out.", correct: true },
        { text: "It was impossible for her to find out.", correct: false },
      ],
    },
    {
      question: "Select the correct word: 'The research was carried out ___ to provide accurate results.'",
      options: [
        { text: "meticulously", correct: true },
        { text: "meticulous", correct: false },
      ],
    },
    {
      question: "Which option best completes the sentence? 'Having ___ the decision, she felt relieved.'",
      options: [
        { text: "made", correct: true },
        { text: "make", correct: false },
      ],
    },
    {
      question: "Choose the correct sentence.",
      options: [
        { text: "No sooner had they arrived than it started to rain.", correct: true },
        { text: "No sooner they had arrived than it started to rain.", correct: false },
      ],
    },
];



  useEffect(() => {
    if (remainingAttempts <= 0 && correctCount < 3) {
      setShowNotQualifiedModal(true);
    }
  }, [remainingAttempts, correctCount]);

  const handleOptionSelect = (index) => {
    if (answered || showNotQualifiedModal || remainingAttempts <= 0) return;

    setSelectedOptionIndex(index);
    const isCorrect = questions[currentQuestionIndex].options[index].correct;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      if (correctCount + 1 >= 3) {
        setShowCompletionModal(true);
        onScoreUpdate(correctCount + 1);
        return;
      }
    }

    handleAttemptDecrease();
    setAnswered(true);
  };

  const handleConfirm = () => {
    setShowCompletionModal(false);
    nextStep();
  };

  const handleSubmit = () => {
    if (remainingAttempts <= 0 || showNotQualifiedModal) return;

    setAnswered(false);
    setSelectedOptionIndex(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (correctCount < 3) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#65A662] mb-6">
        Level C1: English Proficiency Quiz
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the following questions to complete the proficiency test.
      </p>
      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-green-500 mb-2">
            🎉 Congratulations! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed Level C1.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Your language proficiency test is complete!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-green-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 mt-4 transition-transform duration-300"
          >
            Finish Test
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Level Not Qualified
          </h3>
          <p className="text-gray-700 mb-4">
            Unfortunately, you did not meet the requirements to pass this level.
          </p>
          <p className="text-gray-700 mb-6">
            Please visit our center to get the necessary support and improve
            your skills.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/?text=I need help to improve my English proficiency at Level C1.",
                  "_blank"
                )
              }
              className="bg-green-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Share on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+212689164146")}
              className="bg-blue-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              <FaPhone className="mr-2" size={18} /> Call for Assistance
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <p className="text-xl text-gray-800 mb-6 text-center font-medium">
              {questions[currentQuestionIndex].question}
            </p>
            {questions[currentQuestionIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={answered || remainingAttempts <= 0}
                className={`border-2 p-3 rounded-lg mb-4 block w-full text-left transition-all duration-300 ${
                  selectedOptionIndex === idx
                    ? option.correct
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={selectedOptionIndex === null || remainingAttempts <= 0}
            className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
          >
            <FiCheckCircle className="text-white" />
            <span>Submit</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Ex5;
