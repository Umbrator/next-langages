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
      question: "Choisissez la forme correcte : « S'il avait su pour le trafic, il ___ plus tôt. »",
      options: [
        { text: "serait parti", correct: true },
        { text: "partait", correct: false },
        { text: "a quitté", correct: false },
        { text: "avait quitté", correct: false },
      ],
    },
    {
      question: "Sélectionnez la phrase qui utilise correctement 'à peine'.",
      options: [
        { text: "Il avait à peine entré dans la pièce quand le téléphone a sonné.", correct: true },
        { text: "À peine il avait entré dans la pièce quand le téléphone a sonné.", correct: false },
        { text: "Il avait entré à peine dans la pièce quand le téléphone a sonné.", correct: false },
        { text: "Il avait à peine entré quand le téléphone sonna.", correct: false },
      ],
    },
    {
      question: "Complétez la phrase : « La décision était entièrement ___ son contrôle. »",
      type: "text",
      answer: "hors",
    },
    {
      question: "Que signifie l'expression « frapper dans le mille » ?",
      options: [
        { text: "Décrire quelque chose avec précision.", correct: true },
        { text: "Mal comprendre une situation.", correct: false },
        { text: "Réagir impulsivement.", correct: false },
        { text: "Commencer un nouveau projet.", correct: false },
      ],
    },
    {
      question: "Complétez la phrase : « Non seulement elle ___ le contrat, mais elle a aussi reçu une promotion. »",
      options: [
        { text: "a signé", correct: true },
        { text: "signait", correct: false },
        { text: "signa", correct: false },
        { text: "avait signé", correct: false },
      ],
    },
    {
      question: "Complétez avec la bonne préposition : « Il a insisté ___ payer le dîner. »",
      type: "text",
      answer: "pour",
    },
    {
      question: "Quelle phrase utilise correctement le futur antérieur ? « D'ici l'année prochaine, il ___ son diplôme. »",
      options: [
        { text: "aurait terminé", correct: false },
        { text: "aura terminé", correct: true },
        { text: "avait terminé", correct: false },
        { text: "sera terminé", correct: false },
      ],
    },
    {
      question: "Expliquez ce que signifie « Elle devait finir par le découvrir. »",
      type: "text",
      answer: "inévitable",
    },
    {
      question: "Sélectionnez le mot correct : « La recherche a été menée ___ pour garantir des résultats précis. »",
      options: [
        { text: "minutieusement", correct: true },
        { text: "minutieuse", correct: false },
        { text: "minutieux", correct: false },
        { text: "minutieusement", correct: true },
      ],
    },
    {
      question: "Complétez avec le bon adverbe : « Sa décision a été ___ influencée par son éducation. »",
      type: "text",
      answer: "considérablement",
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
      <h2 className="text-4xl font-bold text-center text-[#007bff] mb-6">
        Niveau C1 : Test de Compétence en Français
      </h2>

      <p className="text-lg text-gray-500 mb-4 text-center">
        Répondez aux questions pour compléter le test de compétence.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-green-500 mb-2">
            🎉 Félicitations ! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            Vous avez complété le niveau C1 avec succès.
          </p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            Votre test de compétence linguistique est terminé !
          </p>
          <button
            onClick={handleConfirm}
            className="bg-green-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-green-600 mt-4 transition-transform duration-300"
          >
            Terminer le test
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            Niveau non atteint
          </h3>
          <p className="text-gray-700 mb-4">
            Malheureusement, vous n'avez pas rempli les conditions pour ce niveau.
          </p>
          <p className="text-gray-700 mb-6">
            Veuillez nous contacter pour obtenir le soutien nécessaire.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/?text=J'ai besoin d'aide pour améliorer mon niveau de français au niveau C1.",
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
            {questions[currentQuestionIndex].type === "text" ? (
              <input
                type="text"
                value={inputAnswer}
                onChange={(e) => setInputAnswer(e.target.value)}
                className="border-2 p-3 rounded-lg mb-4 block w-full bg-white"
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
            disabled={
              (selectedOptionIndex === null && inputAnswer === "") ||
              remainingAttempts <= 0
            }
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

export default Ex5;
