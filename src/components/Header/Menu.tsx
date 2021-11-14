import { useCallback, useRef, useState } from 'react'

import Link from 'next/link'

import Button from 'components/Atoms/Button'
import styled from 'styled-components'
import HambugerButton from './HambugerButton'
import useClickOutsideAlerter from 'hooks/clickOutsideAlerter'
import mediaQuery from 'mixins/mediaQuery'

const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
  const menuClass = isOpen ? '-isopen' : ''
  return { isOpen, menuClass, toggleMenu }
}

const Menu = () => {
  const menuRef = useRef(null)
  const { isOpen, menuClass, toggleMenu } = useToggleMenu()

  useClickOutsideAlerter(menuRef, () => {
    if (isOpen) toggleMenu()
  })

  const links = [
    { text: 'Início', path: '/' },
    { text: 'Como funciona', path: '/sobre' },
    { text: 'Login', path: '/login' },
  ]

  return (
    <MenuContainer ref={menuRef}>
      <HambugerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuNav className={menuClass}>
        <NavigationList>
          {links.map((link) => (
            <NavigationItem key={link.text}>
              <Link href={link.path}>
                <a>{link.text}</a>
              </Link>
            </NavigationItem>
          ))}
        </NavigationList>
        <NavButton primary>Buscar</NavButton>
        <NavButton secondary>Cadastrar</NavButton>
      </MenuNav>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  ${mediaQuery.greaterThan('tablet')`
    display: flex;
  `}
`

const MenuNav = styled.nav`
  align-items: stretch;
  background: white;
  display: flex;
  flex-direction: column;
  height: 0;
  left: 0;
  overflow: hidden;
  padding: 0 0 24px;
  position: absolute;
  transition: all ease 0.6s;
  width: 100vw;

  &.-isopen {
    box-shadow: ${(props) => props.theme.bottomShadow};
    height: 295px;
  }

  ${mediaQuery.greaterThan('tablet')`
    &&& {
      align-items: center;
      box-shadow: none;
      flex-direction: row;
      height: unset;
      padding: unset;
      position: unset;
      width: unset;
    }
  `}
`

const NavButton = styled(Button)`
  margin: 8px 72px;

  ${mediaQuery.greaterThan('tablet')`
    margin: 0 0 0 24px;
    padding: 12px 24px;
    min-width: unset;
  `}
`

const NavigationList = styled.ul`
  margin: 0;
  padding: 16px 0;
  text-align: center;

  ${mediaQuery.greaterThan('tablet')`
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    padding: unset;
  `}
`

const NavigationItem = styled.li`
  border-bottom: 1px solid #e69422;
  font-size: 16px;
  line-height: 24px;
  list-style: none;
  padding: 8px;
  text-transform: uppercase;

  ${mediaQuery.greaterThan('tablet')`
    border: none;
    padding: 8px 0 8px 16px;
  `}
`

export default Menu
