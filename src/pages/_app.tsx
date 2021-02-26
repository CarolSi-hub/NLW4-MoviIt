import '../styles/Global.css'
import { LoginProvider } from '../contexts/LoginContext';

export default function MyApp({ Component, pageProps }) { 
  return (
    <LoginProvider>     
      <Component {...pageProps} />      
    </LoginProvider>
  )  
}

