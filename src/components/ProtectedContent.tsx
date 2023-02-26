import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function ProtectedContent({ children }: Props): JSX.Element {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <h1>Loading</h1>
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
