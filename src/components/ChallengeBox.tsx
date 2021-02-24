import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeBoxContainerActive}>
          <header>Ganhe { activeChallenge.amount } xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{ activeChallenge.description }</p>
          </main>
          <footer>
            <button 
            type="button"
            className={styles.failedButton}
            onClick={resetChallenge}
            >
              Failed
              </button>
            <button 
            type="button"
            className={styles.completedButton}
            >
              Completed
            </button>
          </footer>
        </div>) 
      :
      (
      <div className = {styles.challengeBoxNotActive}>
      <strong>
        Finish a cicle to get the challenges
        </strong>
      <p>
        <img src="icons/level-up.svg" alt="Level Up" />
          Level up to receive challenges
        </p>
      </div>
      )
      }      
    </div>
  )
}