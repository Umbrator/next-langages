"use client";

import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Ex1 = ({
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
      question: "Complete the sentence: 'I ___ breakfast at 8:00 every morning.'",
      options: [
        { text: "had", correct: false },
        { text: "have", correct: true },
        { text: "has", correct: false },
        { text: "having", correct: false },
      ],
    },
    {
      question: "What is the opposite of 'cold'?",
      type: "text",
      answer: "hot",
    },
    {
      question: "Choose the correct preposition: 'She is going ___ the store.'",
      options: [
        { text: "in", correct: false },
        { text: "to", correct: true },
        { text: "at", correct: false },
        { text: "on", correct: false },
      ],
    },
    {
      question: "Write the plural form of 'child'.",
      type: "text",
      answer: "children",
    },
    {
      question: "Which of these is a type of weather?",
      options: [
        { text: "Rain", correct: true },
        { text: "Stone", correct: false },
        { text: "Carpet", correct: false },
        { text: "Noise", correct: false },
      ],
    },
    {
      question: "Fill in the blank: 'He ___ a student.'",
      options: [
        { text: "is", correct: true },
        { text: "are", correct: false },
        { text: "am", correct: false },
        { text: "be", correct: false },
      ],
    },
    {
      question: "What is the plural of 'mouse'?",
      type: "text",
      answer: "mice",
    },
    {
      question: "Choose the correct word: 'The cat ___ on the mat.'",
      options: [
        { text: "sit", correct: false },
        { text: "sits", correct: true },
        { text: "sat", correct: false },
        { text: "sitting", correct: false },
      ],
    },
    {
      question: "Which of these is a color?",
      options: [
        { text: "Blue", correct: true },
        { text: "Chair", correct: false },
        { text: "Table", correct: false },
        { text: "Laptop", correct: false },
      ],
    },
    {
      question: "What time is this? '5:00'",
      type: "text",
      answer: "five o'clock",
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

  const handleInputSubmit = () => {
    const isCorrect = inputAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase();
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
    setTimeout(() => {
      setAnswered(false);
      setInputAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (correctCount < 3) {
        setShowNotQualifiedModal(true);
      }
    }, 500);
  };

  const handleConfirm = () => {
    setShowCompletionModal(false);
    nextStep();
  };

  const handleSubmit = () => {
    if (remainingAttempts <= 0 || showNotQualifiedModal) return;

    setAnswered(false);
    setSelectedOptionIndex(null);
    setInputAnswer("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (correctCount < 3) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#FFCC00] mb-6">
        Level A1: German Proficiency Test
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-green-500 mb-2">
            🎉 Glückwunsch! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            Sie haben das Level A1 erfolgreich abgeschlossen.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Level A2 ist jetzt freigeschaltet!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#FFCC00] text-black py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-yellow-600 mt-4 transition-transform duration-300"
          >
            Nächstes Level
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Niveau Nicht Erreicht
          </h3>
          <p className="text-gray-700 mb-4">
            Leider haben Sie die Anforderungen für dieses Level nicht erfüllt.
          </p>
          <p className="text-gray-700 mb-6">
            Bitte kontaktieren Sie uns, um die notwendige Unterstützung zu erhalten.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/?text=Ich benötige Unterstützung, um mein Englisch-Level A1 zu verbessern.",
                  "_blank"
                )
              }
              className="bg-[#FFCC00] text-black flex items-center py-2 px-4 rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Auf WhatsApp teilen
            </button>
            <button
              onClick={() => (window.location.href = "tel:+49123456789")}
              className="bg-green-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
            >
              <FaPhone className="mr-2" size={18} /> Unterstützung anrufen
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <p className="text-xl text-gray-800 mb-6 text-center font-medium">
              {questions[currentQuestionIndex].question}
            </p>
            {questions[currentQuestionIndex].type === "text" ? (
              <input
                type="text"
                value={inputAnswer}
                onChange={(e) => setInputAnswer(e.target.value)}
                className="border-2 p-3 rounded-lg mb-4 block w-full"
                placeholder="Geben Sie Ihre Antwort ein"
              />
            ) : (
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
            )}
          </div>

          <button
            onClick={
              questions[currentQuestionIndex].type === "text"
                ? handleInputSubmit
                : handleSubmit
            }
            disabled={
              (selectedOptionIndex === null && inputAnswer === "") ||
              remainingAttempts <= 0
            }
            className="bg-[#FFCC00] text-black py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-yellow-600 transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
          >
            <FiCheckCircle className="text-black" />
            <span>Absenden</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Ex1;
