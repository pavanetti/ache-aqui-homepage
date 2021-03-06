import { FC, useCallback } from 'react'
import styled from 'styled-components'

interface RadioButtonProps {
  value: string
  name: string
  input: string
  onChange: (value: string) => void
}

const RadioButton: FC<RadioButtonProps> = ({
  children,
  value,
  name,
  input,
  onChange,
}) => {
  const id = `rb__${name}--${value}`
  const handleChange = useCallback(
    (ev) => onChange(ev.target.value),
    [onChange]
  )
  return (
    <Item>
      <Input
        value={value}
        name={name}
        id={id}
        checked={input === value}
        onChange={handleChange}
      />
      <Label htmlFor={id}>{children}</Label>
    </Item>
  )
}

const Item = styled.div`
  height: 32px;
  position: relative;
`

const Label = styled.label`
  align-items: center;
  display: flex;
  font-size: 16px;
  left: 0;
  position: relative;
  top: -35px;

  &,
  &::before,
  &::after {
    transition: all ease 0.3s;
  }

  &::before {
    background: white;
    border: 2px solid #b2b2b2;
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    display: inline-block;
    height: 32px;
    margin-right: 12px;
    width: 32px;
  }

  &::after {
    background: white;
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 20px;
    left: ${(32 - 20) / 2}px;
    position: absolute;
    width: 20px;
  }

  &:hover::after {
    background: #b2b2b2;
  }
`

const Input = styled.input.attrs({ type: 'radio' })`
  cursor: pointer;
  height: 32px;
  margin: 0;
  opacity: 0;
  width: 32px;
  z-index: 10;

  &:hover ~ ${Label}::after {
    background: #b2b2b2;
  }

  &:checked ~ ${Label} {
    &::before {
      border-color: black;
    }
    &::after {
      background: black;
    }
  }
`

export default RadioButton
