import type React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../config/constants'

interface IInput {
  placeholder: string
  icon?: JSX.Element
  type?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
  value?: string
  color?: string
  padding?: string
}

interface IInputDiv {
  color?: string
  padding?: string
}

const InputDiv = styled.div<IInputDiv>`
  border-bottom: 2px solid ${props => props.color ?? COLORS.primary};
  display: flex;
  gap: 10px;
  padding: ${props => props.padding ?? '5px'};
`

const StyledInput = styled.input`
  font-size: 1rem;
  background-color: transparent;
  border: none;
  width: 100%;
  font-family: Sentient;

  :focus {
    outline: none;
  }
`

export default function Input({
  placeholder,
  icon,
  type,
  onChange,
  name,
  value,
  color,
  padding,
}: IInput): JSX.Element {
  return (
    <InputDiv color={color} padding={padding}>
      {icon}
      <StyledInput
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
    </InputDiv>
  )
}
