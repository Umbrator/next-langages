"use client";

import React, { useEffect, useState } from 'react';
import { FiLock, FiUnlock } from 'react-icons/fi';

const Levels = ({ scores }) => {
  const [unlockedLevels, setUnlockedLevels] = useState({
    A1: true,  // A1 is always unlocked
    A2: false,
    B1: false,
    B2: false,
    C1: false,
  });

  useEffect(() => {
    const newUnlockedLevels = {
      A1: true,
      A2: scores.ex1 >= 3,
      B1: scores.ex2 >= 3,
      B2: scores.ex3 >= 3,
      C1: scores.ex4 >= 3,
    };

    console.log('Scores:', scores);
    console.log('Unlocked Levels before update:', unlockedLevels);
    console.log('Unlocked Levels after update:', newUnlockedLevels);

    if (!Object.keys(newUnlockedLevels).every(key => newUnlockedLevels[key] === unlockedLevels[key])) {
      setUnlockedLevels(newUnlockedLevels);
    }
  }, [scores]);

  const getUnlockEffect = (level) => {
    return unlockedLevels[level] ? (
      <div className="chest-open">
        <div className="chest-lid"></div>
        <div className="chest-base">
          <FiUnlock className="icon-unlock" />
        </div>
      </div>
    ) : (
      <div className="chest-locked">
        <FiLock className="icon-lock" />
      </div>
    );
  };

  return (
    <div>
      <style>{`
        .chest-locked {
          position: relative;
          width: 60px;
          height: 60px;
          transition: transform 0.5s ease, opacity 0.5s ease;
          opacity: 0.6;
          transform: scale(0.9);
        }

        .chest-open {
          position: relative;
          width: 60px;
          height: 20px;
          transform: scale(1.2);
          animation: chestUnlockEffect 1s ease-in-out forwards;
          opacity: 1;
        }

        .chest-lid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background-color: #FFD700;
          transform-origin: bottom center;
          transform: rotateX(0deg);
          animation: lidOpening 1s ease forwards;
        }

        .chest-base {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60%;
        }

        .icon-lock, .icon-unlock {
          font-size: 40px;
          display: block;
          margin: 0 auto;
        }

        .icon-lock {
          color: #FF4500;
        }

        .icon-unlock {
          color: #32CD32;
          opacity: 0;
          animation: unlockAppear 0.6s 0.5s forwards;
        }

        @keyframes lidOpening {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(90deg);
          }
        }

        @keyframes chestUnlockEffect {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(-10deg);
          }
          100% {
            transform: scale(1.2) rotate(0deg);
          }
        }

        @keyframes unlockAppear {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .level-container.unlocked:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }

        .level-container.locked {
          cursor: not-allowed;
          opacity: 0.5;
        }
      `}</style>

      <div className="flex flex-wrap justify-center space-x-6 mb-10">
        {/* Level A1 */}
        <div className={`level-container ${unlockedLevels.A1 ? 'unlocked' : 'locked'} p-4 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">A1</h3>
          {getUnlockEffect('A1')}
          <p className="mt-2 text-gray-600 font-medium"></p>
        </div>

        {/* Level A2 */}
        <div className={`level-container ${unlockedLevels.A2 ? 'unlocked' : 'locked'} p-4 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">A2</h3>
          {getUnlockEffect('A2')}
          <p className="mt-2 text-gray-600 font-medium"></p>
        </div>

        {/* Level B1 */}
        <div className={`level-container ${unlockedLevels.B1 ? 'unlocked' : 'locked'} p-4 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">B1</h3>
          {getUnlockEffect('B1')}
          <p className="mt-2 text-gray-600 font-medium"></p>
        </div>

        {/* Level B2 */}
        <div className={`level-container ${unlockedLevels.B2 ? 'unlocked' : 'locked'} p-4 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">B2</h3>
          {getUnlockEffect('B2')}
          <p className="mt-2 text-gray-600 font-medium"></p>
        </div>

        {/* Level C1 */}
        <div className={`level-container ${unlockedLevels.C1 ? 'unlocked' : 'locked'} p-4 bg-white rounded-lg shadow-md flex flex-col items-center w-40 transition-transform transform`}>
          <h3 className="text-lg font-bold">C1</h3>
          {getUnlockEffect('C1')}
          <p className="mt-2 text-gray-600 font-medium"></p>
        </div>
      </div>
    </div>
  );
};

export default Levels;
