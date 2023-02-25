import styled from 'styled-components'
import { COLORS } from '../../config/constants'

interface IInput {
  placeholder: string
  icon: JSX.Element
  type?: string
}

const InputDiv = styled.div`
  border-bottom: 2px solid ${COLORS.primary};
  display: flex;
  gap: 10px;
  padding: 5px;
`

const StyledInput = styled.input`
  font-size: 1rem;
  background-color: transparent;
  border: none;
  width: 100%;

  :focus {
    outline: none;
  }
`

export default function Input({
  placeholder,
  icon,
  type,
}: IInput): JSX.Element {
  return (
    <InputDiv>
      {icon}
      <StyledInput placeholder={placeholder} type={type} />
    </InputDiv>
  )
}
