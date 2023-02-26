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
  email: null | string
  password: null | string
  repeatPassword: null | string
}

export default function Register(): JSX.Element {
  const { register } = useAuth()
  const [user, setUser] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  })

  const [error, setError] = useState<IError>({
    email: null,
    password: null,
    repeatPassword: null,
  })

  const validateUser = (): boolean => {
    setError({ email: null, password: null, repeatPassword: null })
    let anyError = false

    if (user.email === '') {
      setError(error => ({ ...error, email: 'Es obligatorio' }))
      anyError = true
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)) {
      setError(error => ({ ...error, email: 'Email inválido' }))
      anyError = true
    }

    if (user.password === '') {
      setError(error => ({ ...error, password: 'Es obligatorio' }))
      anyError = true
    } else if (user.password.length < 8) {
      setError(error => ({ ...error, password: 'Demasiado corta' }))
      anyError = true
    }

    if (user.repeatPassword === '') {
      setError(error => ({ ...error, repeatPassword: 'Es obligatorio' }))
      anyError = true
    } else if (user.repeatPassword !== user.password) {
      setError(error => ({ ...error, repeatPassword: 'No coincide' }))
      anyError = true
    }

    return anyError
  }

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setUser(user => ({ ...user, [target.name]: target.value }))
  }

  const handleRegister = async (
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const error = validateUser()
    if (error) return

    try {
      await register({ email: user.email, password: user.password })
    } catch {
      setError(error => ({ ...error, email: 'Ya existe' }))
    }
  }

  return (
    <Modal onSubmit={handleRegister}>
      <Title margin="0 0 1.5rem 0">Registrarse</Title>
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
        color={error.password ? COLORS.error : COLORS.primary}
        placeholder="********"
        type="password"
        icon={
          <PasswordIcon
            color={error.password ? COLORS.error : COLORS.primary}
          />
        }
        name="password"
        onChange={handleChange}
        value={user.password}
      />
      <Flex>
        <Text margin="1.5rem 0 0 0">Repetir contraseña</Text>
        {error.repeatPassword && (
          <Text margin="1.5rem 0 0 .5rem" color={COLORS.error}>
            {error.repeatPassword}
          </Text>
        )}
      </Flex>
      <Input
        color={error.repeatPassword ? COLORS.error : COLORS.primary}
        placeholder="********"
        type="password"
        icon={
          <PasswordIcon
            color={error.repeatPassword ? COLORS.error : COLORS.primary}
          />
        }
        name="repeatPassword"
        onChange={handleChange}
        value={user.repeatPassword}
      />

      <Button margin="1.5rem 0 .5rem 0">Registrarse</Button>
      <Link to="/login">Iniciar sesión</Link>
    </Modal>
  )
}
