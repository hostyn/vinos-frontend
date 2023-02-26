import styled from 'styled-components'
import { COLORS } from '../../config/constants'

interface TextProps {
  fontSize?: string
  margin?: string
  color?: string
}

const Text = styled.div<TextProps>`
  font-size: ${props => props.fontSize ?? '1rem'};
  font-family: 'Sentient';
  color: ${props => props.color ?? COLORS.text};
  margin: ${props => props.margin ?? '0'};
`

export default Text
