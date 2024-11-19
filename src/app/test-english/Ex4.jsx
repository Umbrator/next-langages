"use client";

import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Ex4 = ({
  onScoreUpdate,
  nextStep,
  remainingAttempts,
  handleAttemptDecrease,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [inputAnswer, setInputAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showNotQualifiedModal, setShowNotQualifiedModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const questions = [
    {
      question: "Choose the correct form: 'If he ___ harder, he might have passed the exam.'",
      options: [
        { text: "would study", correct: false },
        { text: "studied", correct: false },
        { text: "had studied", correct: true },
        { text: "has studied", correct: false },
      ],
    },
    {
      question: "Which of these sentences is correct?",
      options: [
        { text: "She recommended me to apply for the job.", correct: false },
        { text: "She recommended that I apply for the job.", correct: true },
        { text: "She recommended that I applied for the job.", correct: false },
        { text: "She recommended to apply for the job.", correct: false },
      ],
    },
    {
      question: "Complete the sentence: 'The decision was entirely ___ his control.' (Fill in with the correct preposition)",
      type: "text",
      answer: "beyond"
    },
    {
      question: "Identify the correct sentence structure.",
      options: [
        { text: "She’s used to working under pressure.", correct: true },
        { text: "She’s used to work under pressure.", correct: false },
        { text: "She’s use to working under pressure.", correct: false },
        { text: "She’s use to work under pressure.", correct: false },
      ],
    },
    {
      question: "Fill in the blank with the correct word: 'He refused to apologize, ___ made everyone more upset.'",
      type: "text",
      answer: "which"
    },
    {
      question: "Which sentence uses the future perfect correctly? 'By this time next year, she ___ her degree.'",
      options: [
        { text: "will have completed", correct: true },
        { text: "will completed", correct: false },
        { text: "will be complete", correct: false },
        { text: "is completing", correct: false },
      ],
    },
    {
      question: "What is the implied meaning of the sentence: 'She can’t have finished the report already.'",
      options: [
        { text: "It's impossible that she has finished the report.", correct: true },
        { text: "She definitely finished the report.", correct: false },
        { text: "She might have finished the report.", correct: false },
        { text: "She is required to finish the report.", correct: false },
      ],
    },
    {
      question: "Fill in the blank: 'Despite ___ extremely talented, he struggled to find a job.'",
      type: "text",
      answer: "being"
    },
    {
      question: "What is the meaning of the idiom 'to hit the nail on the head'?",
      options: [
        { text: "To describe something precisely.", correct: true },
        { text: "To make a mistake.", correct: false },
        { text: "To start an argument.", correct: false },
        { text: "To complete a task quickly.", correct: false },
      ],
    },
    {
      question: "Choose the correct option: 'She has a tendency ___ things overcomplicated.'",
      options: [
        { text: "to make", correct: true },
        { text: "of making", correct: false },
        { text: "for make", correct: false },
        { text: "in making", correct: false },
      ],
    },
];


  useEffect(() => {
    if (remainingAttempts <= 0 && correctCount < 6) {
      setShowNotQualifiedModal(true);
    }
  }, [remainingAttempts, correctCount]);

  const handleOptionSelect = (index) => {
    if (answered || showNotQualifiedModal || remainingAttempts <= 0) return;

    setSelectedOptionIndex(index);
    const isCorrect = questions[currentQuestionIndex].options[index].correct;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      if (correctCount + 1 >= 6) {
        setShowCompletionModal(true);
        onScoreUpdate(correctCount + 1);
        return;
      }
    }

    handleAttemptDecrease();
    setAnswered(true);
  };

  const handleInputSubmit = () => {
    const isCorrect = inputAnswer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase();
    
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      if (correctCount + 1 >= 6) {
        setShowCompletionModal(true);
        onScoreUpdate(correctCount + 1);
        return;
      }
    }

    handleAttemptDecrease();
    setInputAnswer("");
    setAnswered(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (correctCount < 6) {
      setShowNotQualifiedModal(true);
    }
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
    } else if (correctCount < 6) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#65A662] mb-6">
        Level B2: English Proficiency Quiz
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
            You have successfully completed Level B2.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Level C1 is now unlocked!
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
                  "https://wa.me/?text=I need help to improve my English proficiency at Level B2.",
                  "_blank"
                )
              }
              className="bg-green-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Share on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+212704309787")}
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
            {questions[currentQuestionIndex].options ? (
              questions[currentQuestionIndex].options.map((option, idx) => (
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
              ))
            ) : (
              <input
                type="text"
                value={inputAnswer}
                onChange={(e) => setInputAnswer(e.target.value)}
                className="border-2 p-3 rounded-lg mb-4 block w-full bg-white"
                placeholder="Type your answer"
              />
            )}
          </div>

          <button
            onClick={
              questions[currentQuestionIndex].options
                ? handleSubmit
                : handleInputSubmit
            }
            disabled={(selectedOptionIndex === null && inputAnswer === "") || remainingAttempts <= 0}
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

export default Ex4;
