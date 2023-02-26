import styled from 'styled-components'

interface ButtonProps {
  fontSize?: string
  margin?: string
}

const Button = styled.button<ButtonProps>`
  font-size: ${props => props.fontSize ?? '1rem'};
  font-family: 'Sentient';
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 5px;
  cursor: pointer;
  background: rgb(189, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(189, 0, 0, 1) 35%,
    rgba(106, 0, 0, 1) 100%
  );
  margin: ${props => props.margin ?? '0'};

  transition: 0.1s;

  :hover {
    scale: 1.03;
  }
`

export default Button
