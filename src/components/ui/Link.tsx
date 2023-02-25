import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { COLORS } from '../../config/constants'

const Link = styled(RouterLink)`
  font-family: Sentient;
  text-decoration: none;
  color: ${COLORS.primary};
  margin: 0 auto;

  :hover {
    text-decoration: underline;
  }
`

export default Link
