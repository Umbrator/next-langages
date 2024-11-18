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
  const [inputAnswer, setInputAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showNotQualifiedModal, setShowNotQualifiedModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const questions = [
    {
      question: "Wählen Sie die richtige Form: „Hätte er über den Verkehr gewusst, wäre er ___ früher gegangen.“",
      options: [
        { text: "losgefahren", correct: true },
        { text: "losging", correct: false },
        { text: "hat verlassen", correct: false },
        { text: "hat früh losgefahren", correct: false },
      ],
    },
    {
      question: "Wählen Sie den Satz, der 'kaum' korrekt verwendet.",
      options: [
        { text: "Er hatte kaum das Zimmer betreten, als das Telefon klingelte.", correct: true },
        { text: "Kaum hatte er das Zimmer betreten, als das Telefon klingelte.", correct: false },
        { text: "Er hatte das Zimmer kaum betreten, als das Telefon klingelte.", correct: false },
        { text: "Er war kaum eingetreten, als das Telefon klingelte.", correct: false },
      ],
    },
    {
      question: "Füllen Sie die Lücke: „Die Entscheidung lag vollständig ___ ihrer Kontrolle.“",
      type: "text",
      answer: "außerhalb",
    },
    {
      question: "Was bedeutet die Redewendung „den Nagel auf den Kopf treffen“?",
      options: [
        { text: "Etwas präzise beschreiben.", correct: true },
        { text: "Eine Situation missverstehen.", correct: false },
        { text: "Impulsiv reagieren.", correct: false },
        { text: "Ein neues Projekt starten.", correct: false },
      ],
    },
    {
      question: "Füllen Sie die Lücke: „Nicht nur hat sie den Vertrag unterschrieben, sondern sie wurde auch befördert.“",
      options: [
        { text: "hat unterschrieben", correct: true },
        { text: "unterschreibt", correct: false },
        { text: "unterzeichnete", correct: false },
        { text: "hatte unterschrieben", correct: false },
      ],
    },
    {
      question: "Füllen Sie mit der richtigen Präposition aus: „Er bestand darauf, das Abendessen zu bezahlen.“",
      type: "text",
      answer: "darauf",
    },
    {
      question: "Welcher Satz verwendet das Futur II korrekt? „Bis nächstes Jahr wird er ___ sein Studium abgeschlossen haben.“",
      options: [
        { text: "abgeschlossen", correct: true },
        { text: "abschließen", correct: false },
        { text: "fertig sein", correct: false },
        { text: "erreicht", correct: false },
      ],
    },
    {
      question: "Erklären Sie, was „Sie musste es irgendwann herausfinden“ impliziert.",
      type: "text",
      answer: "unvermeidlich",
    },
    {
      question: "Wählen Sie das richtige Wort: „Die Forschung wurde ___ durchgeführt, um genaue Ergebnisse zu erzielen.“",
      options: [
        { text: "sorgfältig", correct: true },
        { text: "minutiös", correct: false },
        { text: "genau", correct: false },
        { text: "präzise", correct: false },
      ],
    },
    {
      question: "Füllen Sie mit dem richtigen Adverb aus: „Ihre Entscheidung wurde ___ von ihrer Erziehung beeinflusst.“",
      type: "text",
      answer: "stark",
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
    if (answered || showNotQualifiedModal || remainingAttempts <= 0) return;

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
    setInputAnswer("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (correctCount < 6) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#FFCC00] mb-6">
        Level C1: German Proficiency Test
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the questions to complete the proficiency test.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#FF0000] mb-2">
            🎉 Congratulations! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed level C1.
          </p>
          <p className="text-lg font-semibold text-[#FFCC00] mb-4">
            Your language proficiency test is complete!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#FFCC00] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#FF0000] mt-4 transition-transform duration-300"
          >
            Finish Test
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-4">Level Not Reached</h3>
          <p className="text-gray-700 mb-4">
            Unfortunately, you did not meet the requirements for this level.
          </p>
          <p className="text-gray-700 mb-6">
            Please contact us for assistance to improve your skills.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/?text=I need help to improve my German at level C1.",
                  "_blank"
                )
              }
              className="bg-[#FFCC00] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#FF0000] transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Share on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+49123456789")}
              className="bg-[#FF0000] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#FFCC00] transition-all duration-300"
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
                        ? "bg-[#FFCC00] border-[#FFCC00]"
                        : "bg-[#FF0000] border-[#FF0000]"
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
            className="bg-[#FFCC00] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#FF0000] transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
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
