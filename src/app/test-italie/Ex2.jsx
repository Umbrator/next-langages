"use client";

import React, { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Ex2 = ({
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
      question: "Scegli il verbo corretto: «Io ___ un libro.»",
      options: [
        { text: "leggo", correct: true },
        { text: "legge", correct: false },
        { text: "leggono", correct: false },
        { text: "leggete", correct: false },
      ],
    },
    {
      question: "Qual è il contrario di 'freddo'?",
      type: "text",
      answer: "caldo",
    },
    {
      question: "Completa la frase: «Va ___ scuola.»",
      options: [
        { text: "alla", correct: true },
        { text: "in", correct: false },
        { text: "nella", correct: false },
        { text: "dalla", correct: false },
      ],
    },
    {
      question: "Scrivi il plurale di 'casa'.",
      type: "text",
      answer: "case",
    },
    {
      question: "Scegli la risposta corretta: «Questa è ___ macchina.»",
      options: [
        { text: "la mia", correct: true },
        { text: "il mio", correct: false },
        { text: "le mie", correct: false },
        { text: "i miei", correct: false },
      ],
    },
    {
      question: "Completa la frase: «Noi ___ a casa.»",
      options: [
        { text: "siamo", correct: true },
        { text: "siete", correct: false },
        { text: "sono", correct: false },
        { text: "è", correct: false },
      ],
    },
    {
      question: "Come si dice 'bambino' al plurale?",
      type: "text",
      answer: "bambini",
    },
    {
      question: "Scegli la parola corretta: «Il sole ___ nel cielo.»",
      options: [
        { text: "splende", correct: true },
        { text: "splendere", correct: false },
        { text: "splendono", correct: false },
        { text: "splendendo", correct: false },
      ],
    },
    {
      question: "Quale di queste parole è un colore?",
      options: [
        { text: "Blu", correct: true },
        { text: "Tavolo", correct: false },
        { text: "Sedia", correct: false },
        { text: "Lampada", correct: false },
      ],
    },
    {
      question: "Che ore sono? «3:00»",
      type: "text",
      answer: "tre",
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
    const isCorrect =
      inputAnswer.trim().toLowerCase() ===
      questions[currentQuestionIndex].answer.toLowerCase();
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
    setTimeout(() => {
      setAnswered(false);
      setInputAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (correctCount < 6) {
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
    } else if (correctCount < 6) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#008C45] mb-6">
        Level A1: Italian Language Proficiency Test
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#008C45] mb-2">🎉 Congratulations! 🎉</p>
          <p className="text-gray-600 mb-4">
            You have successfully completed level A1.
          </p>
          <p className="text-lg font-semibold text-[#008C45] mb-4">
            Level A2 is now unlocked!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#008C45] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#006F35] mt-4 transition-transform duration-300"
          >
            Proceed to the next level
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#D52B1E] mb-4">Level Not Reached</h3>
          <p className="text-gray-700 mb-4">
            Unfortunately, you did not meet the requirements for this level.
          </p>
          <p className="text-gray-700 mb-6">
            Please contact us for assistance and to improve your language skills.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/?text=I need help to improve my Italian level at A1.",
                  "_blank"
                )
              }
              className="bg-[#008C45] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#006F35] transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Share on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+39123456789")}
              className="bg-[#D52B1E] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#B0231B] transition-all duration-300"
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
            {questions[currentQuestionIndex].type === "text" ? (
              <input
                type="text"
                value={inputAnswer}
                onChange={(e) => setInputAnswer(e.target.value)}
                className="border-2 p-3 rounded-lg mb-4 block w-full bg-white"
                placeholder="Type your answer"
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
                        ? "bg-[#DFFFD6] border-[#008C45]"
                        : "bg-[#FFD6D6] border-[#D52B1E]"
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
            disabled={(selectedOptionIndex === null && inputAnswer === "") || remainingAttempts <= 0}
            className="bg-[#D52B1E] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#B0231B] transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
          >
            <FiCheckCircle className="text-white" />
            <span>Submit</span>
          </button>
        </>
      )}
    </div>
  );

};

export default Ex2;
