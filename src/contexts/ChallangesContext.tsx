import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({});

interface ChallangesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallangesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXP, setCurrentXP] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [activeChallenge, setActiveCHallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveCHallenge(challenge);
  }

  const context= {
    level,
    currentXP,
    completedChallenges,
    startNewChallenge,
    activeChallenge,
  }

  return (
    <ChallengesContext.Provider value={ context }>
    {children}
    </ ChallengesContext.Provider>
  );
}