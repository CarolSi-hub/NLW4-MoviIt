import Router from 'next/router'
import { useContext } from 'react';
import Head from 'next/head';
import styles from '../styles/pages/Login.module.css';
import LoginForm from '../components/LoginForm'
import { LoginContext } from '../contexts/LoginContext';

export default function Home() {

  const { setLocalStorage } = useContext(LoginContext);

  function handleSubmitLogin() {
    setLocalStorage();
    Router.push('/_game');
  }

  return(
    <div className={ styles.container }>
      <Head>
        <title>Welcome | MoveIt</title>
      </Head>
      <img src="https://previews.123rf.com/images/tvoukent/tvoukent1905/tvoukent190500153/127834655-the-25-minutes-or-seconds-stopwatch-vector-icon-digital-timer-clock-and-watch-timer-modern-style-in-.jpg" />
      <section>
        <LoginForm />
        <button
        className={ styles.loginButton }
          type="button"
          onClick={() => handleSubmitLogin()}
        >
          Go!
      </button>
      </section>    
    </div>
  )
}
