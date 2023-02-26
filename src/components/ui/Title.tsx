import styled from 'styled-components'
import { COLORS } from '../../config/constants'

interface TitleProps {
  fontSize?: string
  margin?: string
}

const Title = styled.div<TitleProps>`
  font-size: ${props => props.fontSize ?? '2rem'};
  font-family: 'Sentient';
  font-weight: bold;
  color: ${COLORS.text};
  margin: ${props => props.margin ?? '0'};
`

export default Title
