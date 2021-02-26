import { useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContext';
import { LoginContext } from '../contexts/LoginContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level  } = useContext(ChallengesContext);
    const { userName } = useContext(LoginContext);


    return(
    <div className={styles.profileContainer}>
        <img src="https://avatars.githubusercontent.com/u/67482398?s=460&u=fc2e54ab632859225499b7761c2014ecc5969eca&v=4" alt="my octocat"/>
        <div>
          <strong>{userName}</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level { level }</p>
        </div>
    </div>
    )
}