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
  const [inputAnswer, setInputAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showNotQualifiedModal, setShowNotQualifiedModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const questions = [
    {
      question: "Scegli la forma corretta: «Se domani ___, annulliamo il picnic.»",
      options: [
        { text: "piove", correct: true },
        { text: "pioverà", correct: false },
        { text: "piovendo", correct: false },
        { text: "piovuto", correct: false },
      ],
    },
    {
      question: "Quale affermazione è corretta?",
      options: [
        { text: "Lei vive qui da dieci anni.", correct: true },
        { text: "Lei vive qui per dieci anni.", correct: false },
        { text: "Lei abitava qui per dieci anni.", correct: false },
        { text: "Lei ha vissuto qui dieci anni.", correct: false },
      ],
    },
    {
      question: "Scegli l'opzione corretta: «Ho perso le mie chiavi ___.»",
      options: [
        { text: "ieri", correct: true },
        { text: "perderle", correct: false },
        { text: "perderò", correct: false },
        { text: "perse", correct: false },
      ],
    },
    {
      question: "Qual è il tag giusto per questa domanda? «Vieni alla festa, ___?»",
      options: [
        { text: "vero?", correct: true },
        { text: "non è?", correct: false },
        { text: "ci sei?", correct: false },
        { text: "vero?", correct: true },
      ],
    },
    {
      question: "Completa la frase: «Quando siamo arrivati, avevano già finito di ___.»",
      options: [
        { text: "cenare", correct: true },
        { text: "dormire", correct: false },
        { text: "partire", correct: false },
        { text: "mangiare", correct: false },
      ],
    },
    {
      question: "Riempi lo spazio: «Sono andato al negozio ___ oggi.»",
      type: "text",
      answer: "presto",
    },
    {
      question: "Quale parola completa la frase: «Parla italiano ___ del fratello.»",
      options: [
        { text: "meglio", correct: true },
        { text: "bene", correct: false },
        { text: "più bene", correct: false },
        { text: "perfetto", correct: false },
      ],
    },
    {
      question: "Scegli la risposta corretta: «È andato dal medico perché si sentiva ___.»",
      options: [
        { text: "male", correct: true },
        { text: "stanco", correct: false },
        { text: "debole", correct: false },
        { text: "male", correct: true },
      ],
    },
    {
      question: "Scrivi il participio passato di «leggere».",
      type: "text",
      answer: "letto",
    },
    {
      question: "Completa la frase: «Hanno deciso di fare una passeggiata nonostante la ___.»",
      options: [
        { text: "pioggia", correct: true },
        { text: "vento", correct: false },
        { text: "sole", correct: false },
        { text: "neve", correct: false },
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

  const handleInputSubmit = () => {
    const isCorrect =
      inputAnswer.trim().toLowerCase() ===
      questions[currentQuestionIndex].answer.toLowerCase();
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
    setInputAnswer("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (correctCount < 3) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#008C45] mb-6">
        Level B1: Italian Language Proficiency Test
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#008C45] mb-2">
            🎉 Congratulations! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed level B1.
          </p>
          <p className="text-lg font-semibold text-[#008C45] mb-4">
            Level B2 is now unlocked!
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
                  "https://wa.me/?text=I need help to improve my Italian at level B1.",
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
                className="border-2 p-3 rounded-lg mb-4 block w-full"
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
            className="bg-[#008C45] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#006F35] transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
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
