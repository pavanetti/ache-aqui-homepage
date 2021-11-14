import styled from 'styled-components'

interface ButtonProps {
  primary?: boolean
  secondary?: boolean
}

const Button = styled.button<ButtonProps>`
  background: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  padding: 12px 24px;
  text-transform: uppercase;
`

export default Button
