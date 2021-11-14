import styled, { StyledComponent } from 'styled-components'

interface ButtonProps {
  primary?: boolean
  secondary?: boolean
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => backgroundColorFrom(props)};
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  padding: 12px 36px;
  text-transform: uppercase;
`

function backgroundColorFrom(props) {
  if (props.primary) {
    return props.theme.colors.primary
  }
  if (props.secondary) {
    return props.theme.colors.secondary
  }

  return props.theme.colors.primary
}

export default Button
