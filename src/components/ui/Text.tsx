import styled from 'styled-components'
import { COLORS } from '../../config/constants'

interface TextProps {
  fontSize?: string
}

const Text = styled.div<TextProps>`
  font-size: ${props => props.fontSize ?? '1rem'};
  font-family: 'Sentient';
  color: ${COLORS.text};
`

export default Text
