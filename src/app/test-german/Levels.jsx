"use client";

import React, { useEffect, useState } from 'react';
import { FiLock, FiUnlock } from 'react-icons/fi';
import '../css/Levels.css';
const Levels = ({ scores }) => {
  const [unlockedLevels, setUnlockedLevels] = useState({
    A1: true,
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

    if (!Object.keys(newUnlockedLevels).every(key => newUnlockedLevels[key] === unlockedLevels[key])) {
      setUnlockedLevels(newUnlockedLevels);
    }
  }, [scores]);

  const getUnlockEffect = (level) => {
    return unlockedLevels[level] ? (
      <div className="chest-open">
        <div className="chest-lid"></div>
        <div className="chest-base">
          <FiUnlock className="icon-unlock-de" />
        </div>
      </div>
    ) : (
      <div className="chest-locked">
        <FiLock className="icon-lock" />
      </div>
    );
  };

  return (
    <div className="levels-grid mb-10">
      {/* Level A1 */}
      <div className={`level-container ${unlockedLevels.A1 ? 'unlocked' : 'locked'}`}>
        <h3 className="text-lg font-bold">A1</h3>
        {getUnlockEffect('A1')}
      </div>

      {/* Level A2 */}
      <div className={`level-container ${unlockedLevels.A2 ? 'unlocked' : 'locked'}`}>
        <h3 className="text-lg font-bold">A2</h3>
        {getUnlockEffect('A2')}
      </div>

      {/* Level B1 */}
      <div className={`level-container ${unlockedLevels.B1 ? 'unlocked' : 'locked'}`}>
        <h3 className="text-lg font-bold">B1</h3>
        {getUnlockEffect('B1')}
      </div>

      {/* Level B2 */}
      <div className={`level-container ${unlockedLevels.B2 ? 'unlocked' : 'locked'}`}>
        <h3 className="text-lg font-bold">B2</h3>
        {getUnlockEffect('B2')}
      </div>

      {/* Level C1 */}
      <div className={`level-container ${unlockedLevels.C1 ? 'unlocked' : 'locked'}`}>
        <h3 className="text-lg font-bold">C1</h3>
        {getUnlockEffect('C1')}
      </div>
    </div>
  );
};

export default Levels;
