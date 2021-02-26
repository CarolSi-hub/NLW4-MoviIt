import { createContext, ReactNode, useState, useEffect } from 'react';

interface LoginContextProps {
  children: ReactNode;
}

interface LoginContextData {
  userName: string, 
  setUserName: (dispatch) => void, 
  setLocalStorage: () => void,
}

export const LoginContext = createContext({} as LoginContextData);


export function LoginProvider({ children }: LoginContextProps) {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getLocalStorage = () => {
      if (typeof window !== "undefined") {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData !== null){
          setUserName(userData.userName);
        }        
      }
    }   
    getLocalStorage();
  }, [])

 

  function setLocalStorage() {
    if (typeof window !== "undefined") {
    localStorage.setItem('userData', JSON.stringify({ userName: userName }))
    }
  }

  return(
    <LoginContext.Provider value={{
      userName,
      setUserName,
      setLocalStorage,
    }}>
      {children}
    </LoginContext.Provider>
  )
}