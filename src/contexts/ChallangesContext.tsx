import { createContext, ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallangesProviderProps {
  children: ReactNode;
  level: number,
  currentXP: number,
  completedChallenges: number,
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
  completedChallenge: () => void,
  activeChallenge: Challenge,
  startNewChallenge: () => void,
  resetChallenge: () => void,
  experienceToNextLevel: number;
  closeLevelUpModal: () => void;
}

export function ChallengesProvider({ children, ...rest }: ChallangesProviderProps) {

  const [level, setLevel] = useState(rest.level ? rest.level : 1);
  const [currentXP, setCurrentXP] = useState(rest.currentXP ? rest.currentXP : 0);
  const [completedChallenges, setCompletedChallenges] = useState(rest.completedChallenges ? rest.completedChallenges : 0);
  const [activeChallenge, setActiveCHallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(() => {
    Cookies.set('level', level.toString());
    Cookies.set('currentXP', currentXP.toString());
    Cookies.set('completedChallenges', completedChallenges.toString());
  },[level, currentXP, completedChallenges])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function completedChallenge() {
    if(!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalXP = currentXP + amount;

    if(finalXP > experienceToNextLevel) {
      finalXP -= experienceToNextLevel;
      levelUp();
    }

    setCurrentXP(finalXP);
    setActiveCHallenge(null);
    setCompletedChallenges(completedChallenges + 1);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function resetChallenge() {
    setActiveCHallenge(null);
  } 

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveCHallenge(challenge);

    if(Notification.permission === 'granted') {
      new Notification('New Challenge!'), {
        body: `Valendo ${challenge.amount}xp!`
      }
    } new Audio('/notification.mp3').play();
  }  

  return (
    <ChallengesContext.Provider value={{
      level,
      currentXP,
      completedChallenges,
      completedChallenge,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      closeLevelUpModal,
    }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

