import { useChallenges } from "../hooks/UseChallenges";
import { useCountdown } from "../hooks/UseCountdown";
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {

  const {
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
    minutes,
    seconds
  } = useCountdown();
  
  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');  

  return(
    <div>
      <div className={styles.countdownContainer }>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
        </div>
      </div>
      {hasFinished ? (
      <button
        disabled
          type="button"
          className={styles.countdownButton}
        >
          End
      </button>
      ) : (
        <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Suspend
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Start
                </button>)
            } 
        </>
      )
      }          
    </div>
  )
}