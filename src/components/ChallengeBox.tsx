import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

  const hasActiveChallange = true;
  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallange ? (
        <div className={styles.challengeBoxContainerActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="body" />
            <strong>Novo desafio</strong>
            <p>Get up and walk for 3 minutes</p>
          </main>
          <footer>
            <button 
            type="button"
            className={styles.challengeBoxContainerFailedButton}
            >
              Failed
              </button>
            <button 
            type="button"
            className={styles.challengeBoxContainerCompletedButton}
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