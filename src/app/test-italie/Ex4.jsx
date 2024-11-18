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
      question: "Scegli la forma corretta: «Se avesse ___, avrebbe potuto superare l'esame.»",
      options: [
        { text: "studiato", correct: true },
        { text: "studiare", correct: false },
        { text: "studiando", correct: false },
        { text: "studiato", correct: true },
      ],
    },
    {
      question: "Quale delle seguenti frasi è corretta?",
      options: [
        { text: "Mi ha consigliato di candidarmi per il lavoro.", correct: true },
        { text: "Mi ha consigliato di applicare il lavoro.", correct: false },
        { text: "Mi ha raccomandato che dovrei fare domanda per il lavoro.", correct: false },
        { text: "Ha suggerito di candidarsi per la posizione.", correct: false },
      ],
    },
    {
      question: "Completa la frase: «La decisione era completamente ___ dal suo controllo.»",
      type: "text",
      answer: "fuori",
    },
    {
      question: "Identifica la struttura della frase corretta.",
      options: [
        { text: "È abituata a lavorare sotto pressione.", correct: true },
        { text: "Lei è abituata a lavorare sotto pressione.", correct: false },
        { text: "Si sta abituando a lavorare sotto pressione.", correct: false },
        { text: "Lavorare sotto pressione è abituale per lei.", correct: false },
      ],
    },
    {
      question: "Completa con la parola giusta: «Si è rifiutato di scusarsi, il che ha reso tutti ancora più ___.»",
      type: "text",
      answer: "irritati",
    },
    {
      question: "Quale frase usa correttamente il futuro anteriore? «A quest'ora l'anno prossimo, avrà ___.»",
      options: [
        { text: "completato i suoi studi", correct: true },
        { text: "finire i suoi studi", correct: false },
        { text: "raggiunto i suoi studi", correct: false },
        { text: "fatto i suoi studi", correct: false },
      ],
    },
    {
      question: "Cosa implica la frase: «Non può aver già finito il rapporto.»",
      options: [
        { text: "È impossibile che abbia finito il rapporto.", correct: true },
        { text: "Ha sicuramente completato il rapporto.", correct: false },
        { text: "Potrebbe aver finito il rapporto.", correct: false },
        { text: "Dovrebbe completare il rapporto.", correct: false },
      ],
    },
    {
      question: "Completa la frase: «Anche se era molto talentuoso, ha avuto difficoltà a trovare un lavoro.»",
      type: "text",
      answer: "trovare",
    },
    {
      question: "Cosa significa l'espressione «colpire nel segno»?",
      options: [
        { text: "Descrivere qualcosa con precisione.", correct: true },
        { text: "Commettere un errore.", correct: false },
        { text: "Iniziare una discussione.", correct: false },
        { text: "Completare rapidamente un compito.", correct: false },
      ],
    },
    {
      question: "Scegli l'opzione giusta: «Ha la tendenza a rendere le cose ___.»",
      options: [
        { text: "più complicate", correct: true },
        { text: "complesse", correct: false },
        { text: "semplificate", correct: false },
        { text: "facili", correct: false },
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

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (correctCount < 6) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#008C45] mb-6">
        Level B2: Italian Proficiency Test
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
            You have successfully completed level B2.
          </p>
          <p className="text-lg font-semibold text-[#008C45] mb-4">
            Level C1 is now unlocked!
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
                  "https://wa.me/?text=I need help to improve my Italian at level B2.",
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
            {questions[currentQuestionIndex].options ? (
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

export default Ex4;