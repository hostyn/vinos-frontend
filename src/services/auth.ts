import { VITE_BACKEND_URI } from '../config/constants'

export interface IUser {
  email: string
  password: string
}

interface IVarietyAndType {
  _id: string
  name: string
}

export interface IMeasurement {
  _id: string
  year: number
  variety: IVarietyAndType
  type: IVarietyAndType
  color: string
  temperature: number
  alcohol: number
  ph: number
  observations: string
  createdAt: string
  updatedAt: string
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
    const { error } = await res.json()
    throw new Error(error)
  }
}

export const logout = async (): Promise<void> => {
  const res = await fetch(`${VITE_BACKEND_URI}/logout`, {
    method: 'POST',
    credentials: 'include',
  })

  if (res.status !== 200) {
    throw new Error('Unexpected error')
  }
}

export const isValidAuth = async (): Promise<boolean> => {
  const res = await fetch(`${VITE_BACKEND_URI}/checkauth`, {
    method: 'GET',
    credentials: 'include',
  })

  if (res.status !== 200) {
    return false
  }
  return true
}

export const getMeasurements = async (): Promise<IMeasurement[]> => {
  const res = await fetch(`${VITE_BACKEND_URI}/measurements`, {
    method: 'GET',
    credentials: 'include',
  })

  if (res.status !== 200) {
    throw new Error(res.status.toString())
  }

  const { measurements } = await res.json()

  return measurements
}
