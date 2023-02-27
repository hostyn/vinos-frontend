import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoadingDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 6rem;
  width: 6rem;
  animation-name: ${rotateAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`

export default function Loading(): JSX.Element {
  return (
    <LoadingDiv>
      <Logo src="/logo.svg" />
    </LoadingDiv>
  )
}
