import styled from 'styled-components'
import { COLORS } from '../../config/constants'

const Select = styled.select`
  font-family: Sentient;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${COLORS.primary};
  padding: 5px;

  :focus {
    border: none;
  }
`

export default Select
