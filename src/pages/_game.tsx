import Head from 'next/head';
import styles from '../styles/pages/Game.module.css';
import { GetServerSideProps } from 'next';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesProvider } from '../contexts/ChallangesContext';
import { CountdownProvider } from '../contexts/CountdownContex';

interface GameProps {
  level: number,
  currentXP: number,
  completedChallenges: number,
}
export default function Game(props: GameProps) {
  return (    
    <ChallengesProvider
      level={props.level}
      currentXP={props.currentXP}
      completedChallenges={props.completedChallenges}
    >
      <CountdownProvider>
    <div className={styles.container}>
      <Head>
        <title>Start | MoveIt</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
      </CountdownProvider>
    </ChallengesProvider> 
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log('recuperou cookie')
  const { level, currentXP, completedChallenges } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXP: Number(currentXP),
      completedChallenges: Number(completedChallenges)
    }
  };
}

