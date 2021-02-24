import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallangesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number,
  currentXP: number,
  completedChallenges: number,
  activeChallenge: Challenge,
  startNewChallenge: () => void,
  resetChallenge: () => void,
  experienceToNextLevel: number;
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

  function resetChallenge() {
    setActiveCHallenge(null);
  }

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  return (
    <ChallengesContext.Provider value={{
      level,
      currentXP,
      completedChallenges,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
    }}
    >
      { children}
    </ChallengesContext.Provider>
  );
}