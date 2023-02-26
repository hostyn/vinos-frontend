/* eslint-disable @typescript-eslint/no-misused-promises */
import type React from 'react'
import { useState } from 'react'
import PasswordIcon from '../components/icons/PasswordIcon'
import UserIcon from '../components/icons/UserIcon'
import Modal from '../components/Modal'
import Button from '../components/ui/Button'
import Flex from '../components/ui/Flex'
import Input from '../components/ui/Input'
import Link from '../components/ui/Link'
import Text from '../components/ui/Text'
import Title from '../components/ui/Title'
import { COLORS } from '../config/constants'
import { useAuth } from '../context/authContext'

interface IError {
  email: string | null
  password: string | null
}

export default function Login(): JSX.Element {
  const { login } = useAuth()
  const [user, setUser] = useState({ email: '', password: '' })
  const [error, setError] = useState<IError>({
    email: null,
    password: null,
  })

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setUser(user => ({ ...user, [target.name]: target.value }))
  }

  const validateUser = (): boolean => {
    let anyError = false

    if (user.email === '') {
      setError(error => ({ ...error, email: 'Obligatorio' }))
      anyError = true
    }

    if (user.password === '') {
      setError(error => ({ ...error, password: 'Obligatorio' }))
      anyError = true
    }

    return anyError
  }

  const handleLogin = async (
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    setError({ email: null, password: null })
    const anyError = validateUser()
    if (anyError) return

    try {
      await login(user)
    } catch ({ message }) {
      if (message === 'user-not-found') {
        setError(error => ({ ...error, email: 'No existe' }))
      }

      if (message === 'wrong-password') {
        setError(error => ({ ...error, password: 'Incorrecta' }))
      }
    }
  }

  return (
    <Modal onSubmit={handleLogin}>
      <Title margin="0 0 1.5rem 0">Iniciar sesión</Title>
      <Flex>
        <Text>Correo electrónico</Text>
        {error.email && (
          <Text margin="0 0 0 .5rem" color={COLORS.error}>
            {error.email}
          </Text>
        )}
      </Flex>
      <Input
        color={error.email ? COLORS.error : COLORS.primary}
        placeholder="correo@electronico.com"
        icon={<UserIcon color={error.email ? COLORS.error : COLORS.primary} />}
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <Flex>
        <Text margin="1.5rem 0 0 0">Contraseña</Text>
        {error.password && (
          <Text margin="1.5rem 0 0 .5rem" color={COLORS.error}>
            {error.password}
          </Text>
        )}
      </Flex>
      <Input
        color={error.email ? COLORS.error : COLORS.primary}
        placeholder="••••••••"
        type="password"
        icon={
          <PasswordIcon color={error.email ? COLORS.error : COLORS.primary} />
        }
        name="password"
        onChange={handleChange}
        value={user.password}
      />
      <Button margin="1.5rem 0 .5rem 0">Iniciar sesión</Button>
      <Link to="/registry">Registrarse</Link>
    </Modal>
  )
}
