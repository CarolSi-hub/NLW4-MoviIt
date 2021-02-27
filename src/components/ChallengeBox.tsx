import { useChallenges } from "../hooks/UseChallenges";
import { useCountdown } from "../hooks/UseCountdown";
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const { activeChallenge, completedChallenge, resetChallenge } = useChallenges();
  const { resetCountdown } = useCountdown();

  function handleChallengeSuccess(){
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

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
            onClick={handleChallengeFailed}
            >
              Failed
              </button>
            <button 
            type="button"
            className={styles.completedButton}
            onClick={handleChallengeSuccess}
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