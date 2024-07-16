import { createContext, useState } from "react";
import { getAllLocalStorage } from "../services/LStorage";

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(JSON.parse(getAllLocalStorage() || '{}').login)
  const user = 'Teste Jr'
  
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      { children }
    </AppContext.Provider>
  )
}