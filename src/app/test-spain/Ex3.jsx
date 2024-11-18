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
      question: "Wählen Sie die richtige Form: „Wenn es morgen ___, sagen wir das Picknick ab.“",
      options: [
        { text: "regnet", correct: true },
        { text: "regnen", correct: false },
        { text: "Regnen", correct: false },
        { text: "regnet", correct: true },
      ],
    },
    {
      question: "Welche Aussage ist korrekt?",
      options: [
        { text: "Sie lebt hier seit zehn Jahren.", correct: true },
        { text: "Sie lebt hier für zehn Jahre.", correct: false },
        { text: "Sie wohnte hier für zehn Jahre.", correct: false },
        { text: "Sie hat hier zehn Jahre gewohnt.", correct: true },
      ],
    },
    {
      question: "Wählen Sie die richtige Option: „Ich habe meine Schlüssel ___.“",
      options: [
        { text: "verloren", correct: true },
        { text: "verlieren", correct: false },
        { text: "verliere", correct: false },
        { text: "verloren", correct: true },
      ],
    },
    {
      question: "Was ist das richtige Frage-Tag? „Du kommst zur Party, ___?“",
      options: [
        { text: "nicht wahr", correct: true },
        { text: "oder?", correct: false },
        { text: "bist du?", correct: false },
        { text: "nicht wahr", correct: true },
      ],
    },
    {
      question: "Vervollständigen Sie den Satz: „Als wir ankamen, hatten sie das Abendessen ___.“",
      options: [
        { text: "fertig", correct: false },
        { text: "beendet", correct: true },
        { text: "abgeschlossen", correct: false },
        { text: "fertiggestellt", correct: true },
      ],
    },
    {
      question: "Füllen Sie die Lücke: „Ich bin heute früher zum Laden ___.“",
      type: "text",
      answer: "gegangen",
    },
    {
      question: "Welches Wort vervollständigt den Satz: „Sie spricht Deutsch ___ als ihr Bruder.“",
      options: [
        { text: "besser", correct: true },
        { text: "mehr gut", correct: false },
        { text: "am besten", correct: false },
        { text: "gut", correct: true },
      ],
    },
    {
      question: "Wählen Sie die richtige Antwort: „Er ging zum Arzt, weil er sich ___ fühlte.“",
      options: [
        { text: "schlecht", correct: true },
        { text: "kranklich", correct: false },
        { text: "nicht gut", correct: false },
        { text: "schlecht", correct: true },
      ],
    },
    {
      question: "Schreiben Sie das Partizip Perfekt von „lesen“.",
      type: "text",
      answer: "gelesen",
    },
    {
      question: "Vervollständigen Sie den Satz: „Sie entschieden sich, trotz des ___ spazieren zu gehen.“",
      options: [
        { text: "Regen", correct: true },
        { text: "Wetters", correct: false },
        { text: "Regnens", correct: false },
        { text: "Regens", correct: true },
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
      <h2 className="text-4xl font-bold text-center text-[#FF5733] mb-6">
        Level B1: Spanish Language Proficiency Test
      </h2>

      <p className="text-lg text-gray-600 mb-4 text-center">
        Answer the questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#FFD700] mb-2">🎉 ¡Felicidades! 🎉</p>
          <p className="text-gray-600 mb-4">
            You have successfully completed level B1.
          </p>
          <p className="text-lg font-semibold text-[#FF5733] mb-4">
            Level B2 is now unlocked!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#FFD700] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#FF5733] mt-4 transition-transform duration-300"
          >
            Proceed to the next level
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#FF5733] mb-4">Level Not Reached</h3>
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
                  "https://wa.me/?text=I need help to improve my Spanish level at B1.",
                  "_blank"
                )
              }
              className="bg-[#FFD700] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#FF5733] transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Share on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+49123456789")}
              className="bg-[#FF5733] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#FFD700] transition-all duration-300"
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
                        ? "bg-[#FFD700] border-[#FFD700]"
                        : "bg-[#FF5733] border-[#FF5733]"
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
            className="bg-[#FFD700] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#FF5733] transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
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
