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
      question: "Choisissez la forme correcte : « S'il ___ demain, nous annulerons le pique-nique. »",
      options: [
        { text: "pleut", correct: true },
        { text: "pleuvoir", correct: false },
        { text: "pluie", correct: false },
        { text: "pleut", correct: true },
      ],
    },
    {
      question: "Quelle phrase est correcte ?",
      options: [
        { text: "Elle a vécu ici pendant dix ans.", correct: true },
        { text: "Elle a vivre ici pendant dix ans.", correct: false },
        { text: "Elle a vécue ici pendant dix ans.", correct: false },
        { text: "Elle vit ici pour dix ans.", correct: false },
      ],
    },
    {
      question: "Sélectionnez l'option correcte : « J'ai ___ mes clés. Je ne les trouve nulle part. »",
      options: [
        { text: "perdu", correct: true },
        { text: "perdre", correct: false },
        { text: "perdant", correct: false },
        { text: "perdu", correct: true },
      ],
    },
    {
      question: "Quel est le bon tag-question ? « Tu viens à la fête, ___ ? »",
      options: [
        { text: "n'est-ce pas", correct: true },
        { text: "ne veux-tu pas", correct: false },
        { text: "viendras-tu", correct: false },
        { text: "n'est-ce pas", correct: true },
      ],
    },
    {
      question: "Complétez la phrase : « À notre arrivée, ils ___ le dîner. »",
      options: [
        { text: "avaient terminé", correct: true },
        { text: "finir", correct: false },
        { text: "ont terminé", correct: false },
        { text: "avaient fini", correct: true },
      ],
    },
    {
      question: "Remplissez le blanc : « Je ___ au magasin plus tôt aujourd'hui. »",
      type: "text",
      answer: "suis allé",
    },
    {
      question: "Quel mot complète le mieux la phrase : « Elle parle français ___ que son frère. »",
      options: [
        { text: "mieux", correct: true },
        { text: "plus bon", correct: false },
        { text: "bon", correct: false },
        { text: "mieux", correct: true },
      ],
    },
    {
      question: "Choisissez la bonne réponse : « Il est allé chez le médecin parce qu'il se sentait ___. »",
      options: [
        { text: "mal", correct: true },
        { text: "malement", correct: false },
        { text: "pas bon", correct: false },
        { text: "mal", correct: true },
      ],
    },
    {
      question: "Écrivez le passé composé de « lire ». ",
      type: "text",
      answer: "lu",
    },
    {
      question: "Complétez la phrase : « Ils ont décidé de sortir malgré ___ . »",
      options: [
        { text: "la pluie", correct: true },
        { text: "il pleut", correct: false },
        { text: "pluie", correct: false },
        { text: "la pluie", correct: true },
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
        Niveau B1 : Test de Compétence en Français
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
            Vous avez réussi le niveau B1.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Le niveau B2 est maintenant débloqué !
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
                  "https://wa.me/?text=J'ai besoin d'aide pour améliorer mon niveau de français au niveau B1.",
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

export default Ex3;
