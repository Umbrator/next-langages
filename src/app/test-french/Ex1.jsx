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
      question: "Complétez la phrase : « Je ___ un café tous les matins. »",
      options: [
        { text: "prends", correct: true },
        { text: "prend", correct: false },
        { text: "prendre", correct: false },
        { text: "prenant", correct: false },
      ],
    },
    {
      question: "Quel est le contraire de « chaud » ?",
      type: "text",
      answer: "froid",
    },
    {
      question: "Choisissez la préposition correcte : « Elle va ___ la boulangerie. »",
      options: [
        { text: "à", correct: true },
        { text: "au", correct: false },
        { text: "dans", correct: false },
        { text: "chez", correct: false },
      ],
    },
    {
      question: "Écrivez le pluriel de « animal ». ",
      type: "text",
      answer: "animaux",
    },
    {
      question: "Sélectionnez la bonne réponse : Laquelle de ces options est un fruit ?",
      options: [
        { text: "pomme", correct: true },
        { text: "table", correct: false },
        { text: "chaise", correct: false },
        { text: "stylo", correct: false },
      ],
    },
    {
      question: "Complétez la phrase : « Il ___ en France. »",
      options: [
        { text: "habite", correct: true },
        { text: "habiter", correct: false },
        { text: "habites", correct: false },
        { text: "habitons", correct: false },
      ],
    },
    {
      question: "Écrivez le féminin de « acteur ». ",
      type: "text",
      answer: "actrice",
    },
    {
      question: "Choisissez le verbe correct : « Ils ___ des amis. »",
      options: [
        { text: "sont", correct: true },
        { text: "es", correct: false },
        { text: "suis", correct: false },
        { text: "être", correct: false },
      ],
    },
    {
      question: "Laquelle de ces options est une couleur ?",
      options: [
        { text: "bleu", correct: true },
        { text: "table", correct: false },
        { text: "stylo", correct: false },
        { text: "chaise", correct: false },
      ],
    },
    {
      question: "Écrivez l’heure en français pour « 3:00 ».",
      type: "text",
      answer: "trois heures",
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
      <h2 className="text-4xl font-bold text-center text-[#007bff] mb-6">
        Niveau A1 : Test de Compétence en Français
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Répondez aux questions pour passer au niveau suivant.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-green-500 mb-2">
            🎉 Félicitations ! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            Vous avez réussi le niveau A1.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Le niveau A2 est maintenant débloqué !
          </p>
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 mt-4 transition-transform duration-300"
          >
            Passer au niveau suivant
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Niveau non atteint
          </h3>
          <p className="text-gray-700 mb-4">
            Malheureusement, vous n'avez pas rempli les conditions pour passer ce niveau.
          </p>
          <p className="text-gray-700 mb-6">
            Veuillez nous contacter pour obtenir l'aide nécessaire et améliorer vos compétences.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/?text=J'ai besoin d'aide pour améliorer mon niveau de français au niveau A1.",
                  "_blank"
                )
              }
              className="bg-blue-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Partager sur WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+33123456789")}
              className="bg-green-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
            >
              <FaPhone className="mr-2" size={18} /> Appeler pour assistance
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
                placeholder="Tapez votre réponse"
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
            disabled={(selectedOptionIndex === null && inputAnswer === "") || remainingAttempts <= 0}
            className="bg-[#007bff] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
          >
            <FiCheckCircle className="text-white" />
            <span>Soumettre</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Ex1;
