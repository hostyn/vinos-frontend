import { createContext, useContext, useEffect, useState } from 'react'
import {
  type IUser,
  isValidAuth,
  login as serviceLogin,
  register as serviceRegister,
  logout as serviceLogout,
} from '../services/auth'

interface IAuthContext {
  loading: boolean
  isAuthenticated: boolean
  login: (user: IUser) => Promise<void>
  register: (user: IUser) => Promise<void>
  logout: () => Promise<void>
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const authContext = createContext<IAuthContext>({
  loading: true,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
})

export const useAuth = (): IAuthContext => useContext(authContext)

export default function AuthProvider({ children }: Props): JSX.Element {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async (user: IUser): Promise<void> => {
    await serviceLogin(user)
    setIsAuthenticated(true)
    setLoading(false)
  }

  const register = async (user: IUser): Promise<void> => {
    await serviceRegister(user)
    setIsAuthenticated(true)
    setLoading(false)
  }

  const logout = async (): Promise<void> => {
    await serviceLogout()
    setIsAuthenticated(false)
    setLoading(false)
  }

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
    <authContext.Provider
      value={{ loading, isAuthenticated, login, register, logout }}
    >
      {children}
    </authContext.Provider>
  )
}
