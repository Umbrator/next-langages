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
      question: "Wählen Sie das richtige Verb: „Ich ___ ein Buch.“",
      options: [
        { text: "liest", correct: false },
        { text: "lese", correct: true },
        { text: "lesen", correct: false },
        { text: "liestest", correct: false },
      ],
    },
    {
      question: "Was ist das Gegenteil von 'kalt'?",
      type: "text",
      answer: "warm",
    },
    {
      question: "Ergänzen Sie den Satz: „Er geht ___ Schule.“",
      options: [
        { text: "auf die", correct: true },
        { text: "zum", correct: false },
        { text: "im", correct: false },
        { text: "bei der", correct: false },
      ],
    },
    {
      question: "Schreiben Sie das Plural von 'Kind'.",
      type: "text",
      answer: "Kinder",
    },
    {
      question: "Wählen Sie das richtige Wort: „Das ist ___ Katze.“",
      options: [
        { text: "meine", correct: true },
        { text: "mein", correct: false },
        { text: "meiner", correct: false },
        { text: "meines", correct: false },
      ],
    },
    {
      question: "Ergänzen Sie den Satz: „Wir ___ zu Hause.“",
      options: [
        { text: "sind", correct: true },
        { text: "seid", correct: false },
        { text: "bin", correct: false },
        { text: "ist", correct: false },
      ],
    },
    {
      question: "Wie sagt man 'Auto' im Plural?",
      type: "text",
      answer: "Autos",
    },
    {
      question: "Wählen Sie das richtige Wort: „Die Sonne ___ am Himmel.“",
      options: [
        { text: "scheint", correct: true },
        { text: "scheinen", correct: false },
        { text: "scheinst", correct: false },
        { text: "scheintest", correct: false },
      ],
    },
    {
      question: "Welches dieser Wörter beschreibt eine Farbe?",
      options: [
        { text: "Blau", correct: true },
        { text: "Tisch", correct: false },
        { text: "Stuhl", correct: false },
        { text: "Lampe", correct: false },
      ],
    },
    {
      question: "Wie spät ist es? „2:00“",
      type: "text",
      answer: "zwei Uhr",
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
      <h2 className="text-4xl font-bold text-center text-[#FFCC00] mb-6">
        Level A1: German Proficiency Quiz
      </h2>

      <p className="text-lg text-gray-600 mb-4 text-center">
        Answer the following questions to proceed to the next level.
      </p>

      {showCompletionModal ? (
        <div className="text-center mt-8">
          <p className="text-2xl font-bold text-[#FF0000] mb-2">
            🎉 Herzlichen Glückwunsch! 🎉
          </p>
          <p className="text-gray-600 mb-4">
            You have successfully completed Level A1.
          </p>
          <p className="text-lg font-semibold text-[#FFCC00] mb-4">
            Level A2 is now unlocked!
          </p>
          <button
            onClick={handleConfirm}
            className="bg-[#FFCC00] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#FF0000] mt-4 transition-transform duration-300"
          >
            Proceed to Next Level
          </button>
        </div>
      ) : showNotQualifiedModal ? (
        <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#FF0000] mb-4">
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
                  "https://wa.me/?text=I need help to improve my German proficiency at Level A1.",
                  "_blank"
                )
              }
              className="bg-[#FFCC00] text-white flex items-center py-2 px-4 rounded-full shadow-md hover:bg-[#FF0000] transition-all duration-300"
            >
              <FaWhatsapp className="mr-2" size={18} /> Share on WhatsApp
            </button>
            <button
              onClick={() => (window.location.href = "tel:+212704309787")}
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

export default Ex1;