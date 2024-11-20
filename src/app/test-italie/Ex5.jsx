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
      question: "Scegli la forma corretta: «Se avesse saputo del traffico, sarebbe uscito ___ prima.»",
      options: [
        { text: "presto", correct: true },
        { text: "prima", correct: false },
        { text: "partito", correct: false },
        { text: "andato", correct: false },
      ],
    },
    {
      question: "Quale frase usa correttamente 'appena'?",
      options: [
        { text: "Appena entrò nella stanza, il telefono squillò.", correct: true },
        { text: "Entrò appena nella stanza, quando il telefono squillò.", correct: false },
        { text: "Era appena entrato quando il telefono squillò.", correct: false },
        { text: "Appena entrato, squillò il telefono.", correct: false },
      ],
    },
    {
      question: "Completa la frase: «La decisione era completamente ___ dal suo controllo.»",
      type: "text",
      answer: "fuori",
    },
    {
      question: "Cosa significa l'espressione «colpire nel segno»?",
      options: [
        { text: "Descrivere qualcosa con precisione.", correct: true },
        { text: "Fraintendere una situazione.", correct: false },
        { text: "Reagire impulsivamente.", correct: false },
        { text: "Iniziare un nuovo progetto.", correct: false },
      ],
    },
    {
      question: "Completa la frase: «Non solo ha firmato il contratto, ma è stata anche promossa.»",
      options: [
        { text: "ha firmato", correct: true },
        { text: "firmò", correct: false },
        { text: "firmava", correct: false },
        { text: "firmato", correct: false },
      ],
    },
    {
      question: "Completa con la preposizione corretta: «Ha insistito ___ pagare la cena.»",
      type: "text",
      answer: "per",
    },
    {
      question: "Quale frase usa correttamente il futuro anteriore? «L'anno prossimo avrà ___ il suo corso di studi.»",
      options: [
        { text: "completato", correct: true },
        { text: "completare", correct: false },
        { text: "finito", correct: false },
        { text: "raggiunto", correct: false },
      ],
    },
    {
      question: "Spiega cosa implica la frase «Doveva scoprirlo prima o poi».",
      type: "text",
      answer: "inevitabile",
    },
    {
      question: "Scegli la parola giusta: «La ricerca è stata condotta ___ per ottenere risultati precisi.»",
      options: [
        { text: "accuratamente", correct: true },
        { text: "precisamente", correct: false },
        { text: "scrupolosamente", correct: false },
        { text: "minuziosamente", correct: false },
      ],
    },
    {
      question: "Completa con l'avverbio corretto: «La sua decisione è stata ___ influenzata dalla sua educazione.»",
      type: "text",
      answer: "fortemente",
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
      <h2 className="text-4xl font-bold text-center text-[#008C45] mb-6">
        Level C1: Italian Proficiency Test
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Answer the questions to complete the proficiency test.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#008C45] mb-2">
            🎉 Congratulations! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed level C1.
          </p>
          <p className="text-lg font-semibold text-[#008C45] mb-4">
            Your language proficiency test is complete!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#008C45] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#006F35] mt-4 transition-transform duration-300"
          >
            Finish Test
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#D52B1E] mb-4">Level Not Reached</h3>
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
                  "https://wa.me/?text=I need help to improve my Italian at level C1.",
                  "_blank"
                )
              }
              className="bg-[#008C45] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#006F35] transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Share on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+212704309787")}
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
            disabled={
              (selectedOptionIndex === null && inputAnswer === "") ||
              remainingAttempts <= 0
            }
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

export default Ex5;
