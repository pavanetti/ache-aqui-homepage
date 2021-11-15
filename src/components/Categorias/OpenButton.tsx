import { ChevronDown } from '@styled-icons/boxicons-regular'
import { FC, useState } from 'react'
import styled from 'styled-components'

interface OpenButtonProps {
  isOpen: boolean
  toggleState: () => void
  className?: string
}

const OpenButton: FC<OpenButtonProps> = ({
  isOpen,
  toggleState,
  className,
}) => {
  const buttonClassName = isOpen ? '-active' : ''

  return (
    <Wrapper className={className}>
      <RoundButton onClick={toggleState} className={buttonClassName}>
        <ChevronDown></ChevronDown>
      </RoundButton>
    </Wrapper>
  )
}

export default OpenButton

const Wrapper = styled.div`
  display: inline-block;
`

const RoundButton = styled.button`
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 50%;
  color: white;
  height: 32px;
  transition: all 0.3s ease-in-out;
  width: 32px;

  &.-active {
    transform: rotate(180deg);
  }
`
