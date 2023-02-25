import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const BackgroundDiv = styled.div`
  background-image: url(/background.svg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-width: 100vw;
  min-height: 100vh;
`

export default function Background(): JSX.Element {
  return (
    <BackgroundDiv>
      <Outlet />
    </BackgroundDiv>
  )
}
