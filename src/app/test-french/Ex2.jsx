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
      question: "Choisissez le mot correct : « Je ___ à l'école tous les jours. »",
      options: [
        { text: "vais", correct: true },
        { text: "va", correct: false },
        { text: "allez", correct: false },
        { text: "aller", correct: false },
      ],
    },
    {
      question: "Quel mot est un adjectif ?",
      options: [
        { text: "Belle", correct: true },
        { text: "Manger", correct: false },
        { text: "Rapide", correct: true },
        { text: "Lire", correct: false },
      ],
    },
    {
      question: "Quel est le contraire de « triste » ?",
      type: "text",
      answer: "joyeux",
    },
    {
      question: "Complétez la phrase : « Le chat a poursuivi le ___ . »",
      options: [
        { text: "chien", correct: true },
        { text: "arbre", correct: false },
        { text: "livre", correct: false },
        { text: "maison", correct: false },
      ],
    },
    {
      question: "Écrivez le passé composé de « aller ». ",
      type: "text",
      answer: "allé",
    },
    {
      question: "Choisissez la bonne réponse : « Elle ___ du café, mais elle n’aime pas le thé. »",
      options: [
        { text: "aime", correct: true },
        { text: "aimer", correct: false },
        { text: "aimes", correct: false },
        { text: "aimez", correct: false },
      ],
    },
    {
      question: "Sélectionnez la question correcte : « ___ vous parler français ? »",
      options: [
        { text: "Est-ce que", correct: true },
        { text: "Es", correct: false },
        { text: "Parler", correct: false },
        { text: "Parle", correct: false },
      ],
    },
    {
      question: "Écrivez le contraire de « difficile ».",
      type: "text",
      answer: "facile",
    },
    {
      question: "Choisissez la phrase correcte.",
      options: [
        { text: "Elle est une étudiante.", correct: true },
        { text: "Elle être une étudiante.", correct: false },
        { text: "Elle étudiants.", correct: false },
        { text: "Elle être étudiante.", correct: false },
      ],
    },
    {
      question: "Complétez la phrase : « Les enfants ___ jouer dans le jardin hier. »",
      options: [
        { text: "ont voulu", correct: true },
        { text: "voulaient", correct: false },
        { text: "voulez", correct: false },
        { text: "voulait", correct: false },
      ],
    },
  ];

  useEffect(() => {
    questions.forEach((question) => {
      if (question.options) {
        question.options = question.options
          .map((option) => ({ ...option }))
          .sort(() => Math.random() - 0.5);
      }
    });
  }, []);

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
        Niveau A2 : Test de Compétence en Français
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
            Vous avez réussi le niveau A2.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Le niveau B1 est maintenant débloqué !
          </p>
          <button
            onClick={handleConfirm}
            className="bg-green-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 mt-4 transition-transform duration-300"
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
                  "https://wa.me/?text=J'ai besoin d'aide pour améliorer mon niveau de français au niveau A2.",
                  "_blank"
                )
              }
              className="bg-green-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Partager sur WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+33123456789")}
              className="bg-blue-500 text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
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
            className="bg-[#65A662] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-transform duration-300 focus:outline-none flex items-center justify-center space-x-2"
          >
            <FiCheckCircle className="text-white" />
            <span>Soumettre</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Ex2;
