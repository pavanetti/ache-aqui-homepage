import styled from 'styled-components'

const TextInput = styled.input`
  background: white;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
  color: ${(props) => props.theme.text.primary};
  font-size: 16px;
  padding: 12px 8px;
`

TextInput.defaultProps = { type: 'text' }

export default TextInput
