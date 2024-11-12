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
      question: "Wählen Sie die richtige Form: „Hätte er ___, hätte er die Prüfung bestehen können.“",
      options: [
        { text: "gelernt", correct: true },
        { text: "lernen", correct: false },
        { text: "lernt", correct: false },
        { text: "war gelernt", correct: false },
      ],
    },
    {
      question: "Welche der folgenden Sätze ist korrekt?",
      options: [
        { text: "Sie empfahl mir, mich für die Stelle zu bewerben.", correct: true },
        { text: "Sie empfahl mir, die Stelle anzuwenden.", correct: false },
        { text: "Sie hat empfohlen, ich soll für die Stelle anwenden.", correct: false },
        { text: "Sie empfahl, sich für die Position zu bewerben.", correct: false },
      ],
    },
    {
      question: "Vervollständigen Sie den Satz: „Die Entscheidung lag vollständig ___ ihrer Kontrolle.“",
      type: "text",
      answer: "außerhalb",
    },
    {
      question: "Identifizieren Sie die richtige Satzstruktur.",
      options: [
        { text: "Sie ist es gewohnt, unter Druck zu arbeiten.", correct: true },
        { text: "Sie ist gewohnt, unter Druck zu arbeiten.", correct: false },
        { text: "Sie gewöhnt sich daran, unter Druck zu arbeiten.", correct: false },
        { text: "Sie arbeitet gewohnt unter Druck.", correct: false },
      ],
    },
    {
      question: "Füllen Sie das richtige Wort aus: „Er weigerte sich, sich zu entschuldigen, was alle noch mehr ___ machte.“",
      type: "text",
      answer: "ärgerlich",
    },
    {
      question: "Welcher Satz verwendet das Futur II richtig? „Zu dieser Zeit im nächsten Jahr wird sie ___.“",
      options: [
        { text: "ihren Abschluss gemacht haben", correct: true },
        { text: "ihren Abschluss machen", correct: false },
        { text: "ihren Abschluss erreicht haben", correct: false },
        { text: "fertig mit Abschluss sein", correct: false },
      ],
    },
    {
      question: "Was bedeutet implizit der Satz: „Sie kann den Bericht nicht schon fertig haben.“",
      options: [
        { text: "Es ist unmöglich, dass sie den Bericht fertig hat.", correct: true },
        { text: "Sie hat den Bericht definitiv fertiggestellt.", correct: false },
        { text: "Sie könnte den Bericht fertiggestellt haben.", correct: false },
        { text: "Sie soll den Bericht fertigstellen.", correct: false },
      ],
    },
    {
      question: "Füllen Sie die Lücke: „Obwohl er sehr talentiert war, fiel es ihm schwer, eine Stelle zu finden.“",
      type: "text",
      answer: "zu finden",
    },
    {
      question: "Was bedeutet die Redewendung „den Nagel auf den Kopf treffen“?",
      options: [
        { text: "Etwas präzise beschreiben.", correct: true },
        { text: "Einen Fehler machen.", correct: false },
        { text: "Einen Streit anfangen.", correct: false },
        { text: "Eine Aufgabe schnell erledigen.", correct: false },
      ],
    },
    {
      question: "Wählen Sie die richtige Option: „Sie hat die Tendenz, die Dinge ___ zu machen.“",
      options: [
        { text: "komplizierter", correct: true },
        { text: "komplex", correct: false },
        { text: "vereinfachen", correct: false },
        { text: "einfacher", correct: false },
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
    const isCorrect = inputAnswer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase();

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      if (correctCount + 1 >= 3) {
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
    } else if (correctCount < 3) {
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
    } else if (correctCount < 3) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#FFCC00] mb-6">
        Level B2: German Proficiency Test
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#FF0000] mb-2">
            🎉 Congratulations! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed level B2.
          </p>
          <p className="text-lg font-semibold text-[#FFCC00] mb-4">
            Level C1 is now unlocked!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#FFCC00] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#FF0000] mt-4 transition-transform duration-300"
          >
            Proceed to the next level
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
                  "https://wa.me/?text=I need help to improve my German at level B2.",
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
            {questions[currentQuestionIndex].options ? (
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

export default Ex4;
