"use client";

import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Ex3 = ({
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
      question: "Choose the correct form: 'If it ___ tomorrow, we will cancel the picnic.'",
      options: [
        { text: "rains", correct: true },
        { text: "rain", correct: false },
      ],
    },
    {
      question: "Which sentence is correct?",
      options: [
        { text: "She has lived here for ten years.", correct: true },
        { text: "She has live here for ten years.", correct: false },
      ],
    },
    {
      question: "Select the correct option: 'I have ___ my keys. I can't find them anywhere.'",
      options: [
        { text: "lost", correct: true },
        { text: "lose", correct: false },
      ],
    },
    {
      question: "What is the correct question tag? 'You’re coming to the party, ___?'",
      options: [
        { text: "aren't you", correct: true },
        { text: "don’t you", correct: false },
      ],
    },
    {
      question: "Complete the sentence: 'By the time we arrived, they ___ dinner.'",
      options: [
        { text: "had finished", correct: true },
        { text: "finish", correct: false },
      ],
    },
    {
      question: "Choose the correct answer: 'He went to the doctor because he was feeling ___.'",
      options: [
        { text: "unwell", correct: true },
        { text: "unwellly", correct: false },
      ],
    },
    {
      question: "Which sentence uses the passive voice?",
      options: [
        { text: "The book was written by J.K. Rowling.", correct: true },
        { text: "J.K. Rowling wrote the book.", correct: false },
      ],
    },
    {
      question: "Choose the correct answer: 'I'm looking forward ___ you soon.'",
      options: [
        { text: "to seeing", correct: true },
        { text: "to see", correct: false },
      ],
    },
    {
      question: "Which word best completes the sentence: 'She speaks English ___ than her brother.'",
      options: [
        { text: "better", correct: true },
        { text: "more good", correct: false },
      ],
    },
    {
      question: "Select the correct answer: 'They decided to go for a walk despite ___.'",
      options: [
        { text: "the rain", correct: true },
        { text: "it is raining", correct: false },
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
        Level B1: English Proficiency Quiz
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the following questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-green-500 mb-2">
            🎉 Congratulations! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed Level B1.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Level B2 is now unlocked!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-green-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 mt-4 transition-transform duration-300"
          >
            Proceed to Next Level
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
                  "https://wa.me/?text=I need help to improve my English proficiency at Level B1.",
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

export default Ex3;
