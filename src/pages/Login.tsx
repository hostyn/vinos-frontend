import PasswordIcon from '../components/icons/PasswordIcon'
import UserIcon from '../components/icons/UserIcon'
import Modal from '../components/Modal'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Link from '../components/ui/Link'
import Text from '../components/ui/Text'
import Title from '../components/ui/Title'

export default function Login(): JSX.Element {
  return (
    <Modal>
      <Title>Iniciar sesión</Title>
      <Text>Correo electrónico</Text>
      <Input placeholder="correo@electronico.com" icon={<UserIcon />} />
      <Text>Contraseña</Text>
      <Input placeholder="********" type="password" icon={<PasswordIcon />} />
      <Button>Iniciar sesión</Button>
      <Link to="/registry">Registrarse</Link>
    </Modal>
  )
}
