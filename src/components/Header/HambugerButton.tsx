import { FC } from 'react'
import styled from 'styled-components'
import mediaQuery from 'mixins/mediaQuery'

interface HambugerButtonProps {
  isOpen: boolean
  toggleMenu: () => void
}

const HambugerButton: FC<HambugerButtonProps> = ({ isOpen, toggleMenu }) => {
  const isOpenClassName = isOpen ? '-isopen' : ''
  return (
    <InvisibleButton onClick={toggleMenu}>
      <AnimatedButton className={isOpenClassName} />
    </InvisibleButton>
  )
}

export default HambugerButton

const InvisibleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  height: 48px;
  padding: 16px;
  width: 48px;

  ${mediaQuery.greaterThan('tablet')`
    display: none;
  `}
`

const AnimatedButton = styled.div`
  &,
  &::before,
  &::after {
    background: #204372;
    content: '';
    height: 2px;
    position: absolute;
    transition: background ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
    width: 16px;
  }

  &::before {
    left: 0;
    top: -6px;
  }
  &::after {
    left: 0;
    top: 6px;
  }

  &.-isopen {
    background: transparent;
  }

  &.-isopen::before {
    transform: rotate(45deg);
  }

  &.-isopen::after {
    transform: rotate(-45deg);
  }
  &.-isopen::before,
  &.-isopen::after {
    top: 0;
    transition: top ease 0.3s, transform ease 0.3s 0.3s;
  }
`
