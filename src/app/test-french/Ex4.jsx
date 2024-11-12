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
      question: "Choisissez la forme correcte : « S'il avait ___ plus fort, il aurait pu réussir l'examen. »",
      options: [
        { text: "étudié", correct: true },
        { text: "étudier", correct: false },
        { text: "étudie", correct: false },
        { text: "était étudier", correct: false },
      ],
    },
    {
      question: "Laquelle de ces phrases est correcte ?",
      options: [
        { text: "Elle m'a recommandé d'appliquer pour le poste.", correct: false },
        { text: "Elle a recommandé que je postule pour le poste.", correct: true },
        { text: "Elle a recommandé que j'applique pour le poste.", correct: false },
        { text: "Elle a recommandé appliquer pour le poste.", correct: false },
      ],
    },
    {
      question: "Complétez la phrase : « La décision était entièrement ___ son contrôle. » (Complétez avec la bonne préposition)",
      type: "text",
      answer: "hors",
    },
    {
      question: "Identifiez la structure de phrase correcte.",
      options: [
        { text: "Elle est habituée à travailler sous pression.", correct: true },
        { text: "Elle est habituée à travail sous pression.", correct: false },
        { text: "Elle est habituée à travaille sous pression.", correct: false },
        { text: "Elle est habitué à travailler sous pression.", correct: false },
      ],
    },
    {
      question: "Complétez avec le bon mot : « Il a refusé de s'excuser, ___ a rendu tout le monde plus contrarié. »",
      type: "text",
      answer: "ce qui",
    },
    {
      question: "Quelle phrase utilise correctement le futur antérieur ? « À cette époque l'année prochaine, elle ___ son diplôme. »",
      options: [
        { text: "aura terminé", correct: true },
        { text: "terminera", correct: false },
        { text: "serait terminée", correct: false },
        { text: "finira", correct: false },
      ],
    },
    {
      question: "Quel est le sens implicite de la phrase : « Elle ne peut pas avoir déjà fini le rapport. »",
      options: [
        { text: "Il est impossible qu'elle ait fini le rapport.", correct: true },
        { text: "Elle a certainement fini le rapport.", correct: false },
        { text: "Elle pourrait avoir fini le rapport.", correct: false },
        { text: "Elle doit finir le rapport.", correct: false },
      ],
    },
    {
      question: "Complétez le blanc : « Malgré ___ extrêmement talentueux, il avait du mal à trouver un emploi. »",
      type: "text",
      answer: "être",
    },
    {
      question: "Quelle est la signification de l'expression « frapper dans le mille » ?",
      options: [
        { text: "Décrire quelque chose avec précision.", correct: true },
        { text: "Faire une erreur.", correct: false },
        { text: "Commencer une dispute.", correct: false },
        { text: "Achever rapidement une tâche.", correct: false },
      ],
    },
    {
      question: "Choisissez la bonne option : « Elle a tendance ___ les choses compliquées. »",
      options: [
        { text: "à rendre", correct: true },
        { text: "pour faire", correct: false },
        { text: "en rendre", correct: false },
        { text: "de rendre", correct: false },
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
      <h2 className="text-4xl font-bold text-center text-[#007bff] mb-6">
        Niveau B2 : Test de Compétence en Français
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
            Vous avez réussi le niveau B2.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Le niveau C1 est maintenant débloqué !
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
                  "https://wa.me/?text=J'ai besoin d'aide pour améliorer mon niveau de français au niveau B2.",
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
              <FaPhone className="mr-2" size={18} /> Appeler pour de l'aide
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
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
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
                placeholder="Tapez votre réponse"
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

export default Ex4;
