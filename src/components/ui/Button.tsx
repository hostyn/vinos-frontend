import styled from 'styled-components'

interface ButtonProps {
  fontSize?: string
  margin?: string
  padding?: string
}

const Button = styled.button<ButtonProps>`
  margin: ${props => props.margin ?? '0'};
  padding: ${props => props.padding ?? '5px'};
  font-size: ${props => props.fontSize ?? '1rem'};
  font-family: 'Sentient';
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(189, 0, 0, 1) 35%,
    rgba(106, 0, 0, 1) 100%
  );
  transition: 0.1s;

  :hover {
    scale: 1.03;
  }
`

export default Button
