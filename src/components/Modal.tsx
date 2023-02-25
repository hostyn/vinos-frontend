import styled from 'styled-components'
import { COLORS } from '../config/constants'

interface ModalProps {
  children: JSX.Element | JSX.Element[]
}

const ModalContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalDiv = styled.div`
  width: 25rem;
  max-width: 90vw;
  height: 30rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-color: ${COLORS.background};
  border-radius: 10px;
  box-shadow: 0px 0px 30px 10px ${COLORS.shadow};
`

export default function Modal({ children }: ModalProps): JSX.Element {
  return (
    <ModalContainer>
      <ModalDiv>{children}</ModalDiv>
    </ModalContainer>
  )
}
