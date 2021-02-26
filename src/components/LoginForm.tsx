import { useContext } from 'react';
import Head from 'next/head';
import { LoginContext } from '../contexts/LoginContext';
import styles from '../styles/components/LoginForm.module.css';
export default function Login() {

  const { setUserName } = useContext(LoginContext);  

  return (
    <div className={styles.loginFormContainer }>
      <h1>Welcome to MoveIt!</h1>
      <input
        className={ styles.inputBox }
        type="text"
        name="username"
        placeholder="Enter your name here"
        onChange={(e) => setUserName(e.target.value)}
      />         
    </div>
  )
}