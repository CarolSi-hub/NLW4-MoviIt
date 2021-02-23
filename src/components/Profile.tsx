import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return(
    <div className={styles.profileContainer}>
        <img src="https://avatars.githubusercontent.com/u/67482398?s=460&u=fc2e54ab632859225499b7761c2014ecc5969eca&v=4" alt="my octocat"/>
        <div>
          <strong>Carol Andrade</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level 1</p>
        </div>
    </div>
    )
}