import { VITE_BACKEND_URI } from '../config/constants'

interface IUser {
  email: string
  password: string
}

export const register = async (user: IUser): Promise<void> => {
  const res = await fetch(`${VITE_BACKEND_URI}/registry`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  if (res.status !== 200) {
    throw new Error('user-already-exists')
  }
}

export const login = async (user: IUser): Promise<void> => {
  const res = await fetch(`${VITE_BACKEND_URI}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })

  if (res.status !== 200) {
    throw new Error('user-already-exists')
  }
}
