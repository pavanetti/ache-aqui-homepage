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
  const colors = {
    primary: '#204372',
    secondary: '#3E98C7',
  }

  for (const key of ['primary', 'secondary']) {
    if (props[key]) {
      return colors[key]
    }
  }
  return colors.primary
}

export default Button
