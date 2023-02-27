import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import Loading from './Loading'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function NotAuthenticatedContent({
  children,
}: Props): JSX.Element {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <Loading />
  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}
