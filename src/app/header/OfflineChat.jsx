"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const OfflineChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [showCard, setShowCard] = useState(true);
  const [showOptions, setShowOptions] = useState(true);

  const chatEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsWelcomeScreen(true);
    setShowInput(false);
    setChatHistory([]);
    setIsTyping(false);
    setShowNotification(false);
  };

  const startChat = () => {
    setIsWelcomeScreen(false);
    setShowInput(true);
    setIsOpen(true);
    setShowCard(false);
    setChatHistory([
      {
        sender: "bot",
        text: "Welcome to our support chat! 👋 How can we help you today?",
      },
    ]);
  };

  const handleSendMessage = (message) => {
    if (message.trim() === "") return;

    const newUserMessage = { sender: "user", text: message };
    setChatHistory((prevHistory) => [...prevHistory, newUserMessage]);
    setUserMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const newBotMessage = {
        sender: "bot",
        text: getBotResponse(message),
        options: getResponseOptions(message),
      };
      setChatHistory((prevHistory) => [...prevHistory, newBotMessage]);
      setIsTyping(false);
      setShowOptions(false);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const lowercasedMessage = message.toLowerCase();

    if (lowercasedMessage.includes("pricing")) {
      return "Our pricing ranges from 350DH to 850DH depending on the package and level you choose. Would you like more details about specific language courses?";
    } else if (lowercasedMessage.includes("contact")) {
      return "You can reach us at oceanconnecting.ma@gmail.com or call us at +212-704309787. How else can I assist you?";
    } else if (lowercasedMessage.includes("learn english")) {
      return "We offer English courses from beginner to advanced levels. Would you like information on course levels, pricing, or learning resources?";
    } else if (lowercasedMessage.includes("learn french")) {
      return "Our French courses focus on grammar, vocabulary, and conversation practice. Are you interested in beginner or advanced materials, or would you like help selecting a level?";
    } else if (lowercasedMessage.includes("learn spanish")) {
      return "We provide Spanish courses covering levels A1 to C2. Let us know if you need help choosing a level or want to explore our resources.";
    } else if (lowercasedMessage.includes("learn german")) {
      return "Our German courses are designed to help you build fluency. Would you like details on course levels, pricing, or learning materials?";
    } else if (lowercasedMessage.includes("learn italian")) {
      return "We offer Italian language learning for all levels, from beginner to advanced. Let us know if you need guidance on resources or specific learning strategies.";
    } else {
      return "I’m here to help! Please select one of the options below or ask your question directly.";
    }
  };

  const getResponseOptions = (message) => {
    const lowercasedMessage = message.toLowerCase();
    if (
      lowercasedMessage.includes("pricing") ||
      lowercasedMessage.includes("contact")
    ) {
      return null;
    }
    return [
      "Pricing Information",
      "Contact Support",
      "Learn English",
      "Learn French",
      "Learn Spanish",
      "Learn German",
      "Learn Italian",
    ];
  };

  const handleOptionClick = (option) => {
    handleSendMessage(option);
    setShowOptions(false); // Hide options after selecting one
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage(userMessage);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showCard && (
        <motion.div
          className="fixed bottom-20 right-4 bg-white w-64 p-4 shadow-lg rounded-lg border border-gray-200 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="bg-with p-4 flex flex-col items-center text-center">
            <motion.span
              className="text-4xl mb-2"
              animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👋
            </motion.span>
            <p className="text-lg font-semibold">Hi! Need assistance?</p>
            <div className="mt-4 w-full flex flex-col space-y-2">
              <button
                onClick={startChat}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-md font-medium hover:bg-green-700 transition duration-300"
              >
                Start chat 💬
              </button>
              <button
                onClick={() => setShowCard(false)}
                className="bg-gray-200 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-300 transition duration-300"
              >
                No thanks
              </button>
            </div>
          </div>
        </motion.div>
      )}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 1 }}
        animate={{
          scale: showNotification ? [1, 1.1, 1] : 1,
          transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <button
          onClick={toggleChat}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300"
        >
          {isOpen ? <FaTimes size={24} /> : <MdChatBubble size={24} />}
          {showNotification && !isOpen && (
            <motion.div
              className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold rounded-full px-2 py-1 shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              New!
            </motion.div>
          )}
        </button>
      </motion.div>

      {showTooltip && !isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-16 right-4 bg-black text-white text-xs p-2 rounded shadow-lg z-50"
        >
          Click to chat with us!
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 bg-white w-80 md:w-96 h-[70vh] shadow-2xl rounded-lg z-50 flex flex-col overflow-hidden border border-gray-300"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex justify-between items-center rounded-t-lg">
              <h3 className="font-semibold">Support Chat</h3>
              <FaTimes
                onClick={toggleChat}
                className="cursor-pointer"
                size={20}
              />
            </div>
            {isWelcomeScreen ? (
              <div className="p-6 flex flex-col items-center text-center">
                <h2 className="text-xl font-bold mb-2">Welcome!</h2>
                <p className="mb-4">Click below to start the chat.</p>
                <button
                  onClick={startChat}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Chat Now
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 p-4 overflow-y-auto space-y-2">
                  {chatHistory.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: msg.sender === "user" ? 50 : -50,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-lg shadow-md ${
                        msg.sender === "user"
                          ? "bg-blue-100 self-end"
                          : "bg-gray-100 self-start"
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <div className="bg-gray-100 p-2 rounded-lg shadow-md self-start">
                      <span className="italic text-gray-500">
                        Support is typing...
                      </span>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                {showOptions &&
                  chatHistory.length > 0 &&
                  chatHistory[chatHistory.length - 1].options && (
                    <div className="p-4 bg-gray-100 flex flex-col space-y-2">
                      {chatHistory[chatHistory.length - 1].options.map(
                        (option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                          >
                            {option}
                          </button>
                        )
                      )}
                    </div>
                  )}
                {!showOptions && (
                  <button
                    onClick={() => setShowOptions(true)}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300 m-4"
                  >
                    Show Options
                  </button>
                )}
                {showInput && (
                  <div className="p-4 bg-gray-200 rounded-b-lg flex items-center">
                    <input
                      type="text"
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      className="flex-1 p-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button
                      onClick={() => handleSendMessage(userMessage)}
                      className="ml-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition duration-300 shadow-md"
                    >
                      <FaPaperPlane size={16} />
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfflineChat;
