import '../styles/Global.css'
import { ChallengesProvider } from '../contexts/ChallangesContext';
import { CountdownProvider } from '../contexts/CountdownContex';

function MyApp({ Component, pageProps }) { 
  return (
    <ChallengesProvider>
      <CountdownProvider>
      <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider> 
  )  
}

export default MyApp
