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
  padding: 12px 24px;
  text-transform: uppercase;
`

function backgroundColorFrom(props) {
  if (props.primary) {
    return props.theme.primaryColor
  }
  if (props.secondary) {
    return props.theme.secondaryColor
  }

  return props.theme.primaryColor
}

export default Button
