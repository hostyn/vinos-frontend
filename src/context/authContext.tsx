import { createContext, useContext, useEffect, useState } from 'react'
import { isValidAuth } from '../services/auth'

interface IAuthContext {
  loading: boolean
  isAuthenticated: boolean
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const authContext = createContext<IAuthContext>({
  loading: true,
  isAuthenticated: false,
})

export const useAuth = (): IAuthContext => useContext(authContext)

export default function AuthProvider({ children }: Props): JSX.Element {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    isValidAuth()
      .then(isAuthenticated => {
        setIsAuthenticated(isAuthenticated)
        setLoading(false)
      })
      .catch(() => {
        setIsAuthenticated(false)
        setLoading(false)
      })
  }, [])

  return (
    <authContext.Provider value={{ loading, isAuthenticated }}>
      {children}
    </authContext.Provider>
  )
}
