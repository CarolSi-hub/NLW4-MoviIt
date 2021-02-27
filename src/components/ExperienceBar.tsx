import { useChallenges } from '../hooks/UseChallenges';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

  const { currentXP, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.round(currentXP * 100) / experienceToNextLevel;

  return(
    <header className={styles.experienceBar} >
      <span>0 xp</span>
      <div>
        <div 
          style={{ width: `${percentToNextLevel}%` }}>
          <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
            {currentXP}px
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}