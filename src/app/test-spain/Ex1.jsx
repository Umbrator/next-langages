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
      question: "Elige el verbo correcto: « Yo ___ un libro.»",
      options: [
        { text: "lee", correct: false },
        { text: "leo", correct: true },
        { text: "leer", correct: false },
        { text: "leyendo", correct: false },
      ],
    },
    {
      question: "¿Cuál es el antónimo de 'frío'?",
      type: "text",
      answer: "calor",
    },
    {
      question: "Completa la frase: «Él va ___ escuela.»",
      options: [
        { text: "a la", correct: true },
        { text: "de la", correct: false },
        { text: "en", correct: false },
        { text: "hacia", correct: false },
      ],
    },
    {
      question: "Escribe el plural de 'niño'.",
      type: "text",
      answer: "niños",
    },
    {
      question: "Selecciona la palabra correcta: «Esta es ___ casa.»",
      options: [
        { text: "mi", correct: true },
        { text: "mis", correct: false },
        { text: "mío", correct: false },
        { text: "mía", correct: false },
      ],
    },
    {
      question: "Completa la frase: «Nosotros ___ en casa.»",
      options: [
        { text: "estamos", correct: true },
        { text: "están", correct: false },
        { text: "estás", correct: false },
        { text: "está", correct: false },
      ],
    },
    {
      question: "¿Cómo se dice 'coche' en plural?",
      type: "text",
      answer: "coches",
    },
    {
      question: "Elige la palabra correcta: «El sol ___ en el cielo.»",
      options: [
        { text: "brilla", correct: true },
        { text: "brillar", correct: false },
        { text: "brillan", correct: false },
        { text: "brillas", correct: false },
      ],
    },
    {
      question: "¿Cuál de estas palabras describe un color?",
      options: [
        { text: "Azul", correct: true },
        { text: "Mesa", correct: false },
        { text: "Silla", correct: false },
        { text: "Lámpara", correct: false },
      ],
    },
    {
      question: "¿Qué hora es? «2:00»",
      type: "text",
      answer: "dos en punto",
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
      inputAnswer.toLowerCase() ===
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
    setTimeout(() => {
      setAnswered(false);
      setInputAnswer("");
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else if (correctCount < 6) {
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
    } else if (correctCount < 6) {
      setShowNotQualifiedModal(true);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center text-[#FF5733] mb-6">
        Level A1: Spanish Proficiency Quiz
      </h2>

      <p className="text-lg text-gray-600 mb-4 text-center">
        Answer the following questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#FFD700] mb-2">
            🎉 ¡Felicidades! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed Level A1.
          </p>
          <p className="text-lg font-semibold text-[#FF5733] mb-4">
            Level A2 is now unlocked!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#FFD700] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#FF5733] mt-4 transition-transform duration-300"
          >
            Proceed to Next Level
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#FF5733] mb-4">
            Level Not Qualified
          </h3>
          <p className="text-gray-700 mb-4">
            Unfortunately, you did not meet the requirements to pass this level.
          </p>
          <p className="text-gray-700 mb-6">
            Please contact us for the necessary support to improve your skills.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/?text=I need help to improve my Spanish proficiency at Level A1.",
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
                placeholder="Escribe tu respuesta"
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
            disabled={
              (selectedOptionIndex === null && inputAnswer === "") ||
              remainingAttempts <= 0
            }
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

export default Ex1;