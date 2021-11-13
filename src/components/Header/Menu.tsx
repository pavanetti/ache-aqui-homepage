import { useCallback, useState } from 'react'

import Link from 'next/link'

import Button from '../Atoms/Button'
import styled from 'styled-components'
import HambugerButton from './HambugerButton'

const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
  const menuClass = isOpen ? '-isopen' : ''
  return { isOpen, menuClass, toggleMenu }
}

const Menu = () => {
  const links = [
    { text: 'Início', path: '/' },
    { text: 'Como funciona', path: '/sobre' },
    { text: 'Login', path: '/login' },
  ]

  const { isOpen, menuClass, toggleMenu } = useToggleMenu()

  return (
    <div>
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
    </div>
  )
}

const MenuNav = styled.nav`
  align-items: stretch;
  background: white;
  display: flex;
  flex-direction: column;
  height: 0;
  left: 0;
  overflow: hidden;
  padding: 12px 0;
  position: absolute;
  transition: height ease 0.6s;
  width: 100vw;

  &.-isopen {
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -1px,
      rgb(0 0 0 / 14%) 0px 8px 8px 0px, rgb(255 255 255 / 12%) 0px 10px 10px 0px;
    height: 290px;
  }
`

const NavButton = styled(Button)`
  align-self: center;
  margin: 8px 0;
  width: 144px;
`

const NavigationList = styled.ul`
  margin: 0;
  padding: 16px 0;
  text-align: center;
`

const NavigationItem = styled.li`
  border-bottom: 1px solid #e69422;
  font-size: 16px;
  line-height: 24px;
  list-style: none;
  padding: 8px;
  text-transform: uppercase;
`

export default Menu
