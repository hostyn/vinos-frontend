import type React from 'react'
import { useState } from 'react'
import PasswordIcon from '../components/icons/PasswordIcon'
import UserIcon from '../components/icons/UserIcon'
import Modal from '../components/Modal'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Link from '../components/ui/Link'
import Text from '../components/ui/Text'
import Title from '../components/ui/Title'

export default function Login(): JSX.Element {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setUser(user => ({ ...user, [target.name]: target.value }))
  }

  const handleLogin = (): void => {}

  return (
    <Modal>
      <Title margin="0 0 1.5rem 0">Iniciar sesión</Title>
      <Text>Correo electrónico</Text>
      <Input
        placeholder="correo@electronico.com"
        icon={<UserIcon />}
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <Text margin="1.5rem 0 0 0">Contraseña</Text>
      <Input
        placeholder="********"
        type="password"
        icon={<PasswordIcon />}
        name="password"
        onChange={handleChange}
        value={user.password}
      />
      <Button margin="1.5rem 0 .5rem 0" onClick={handleLogin}>
        Iniciar sesión
      </Button>
      <Link to="/registry">Registrarse</Link>
    </Modal>
  )
}
