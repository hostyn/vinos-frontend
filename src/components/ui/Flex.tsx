import styled from 'styled-components'

interface IFlex {
  flexDirection?: string
  gap?: string
  justifyContent?: string
  margin?: string
}

const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${props => props.flexDirection ?? 'row'};
  justify-content: ${props => props.justifyContent ?? 'left'};
  gap: ${props => props.gap ?? '0'};
  margin: ${props => props.margin ?? '0'};
  width: 100%;
`

export default Flex
