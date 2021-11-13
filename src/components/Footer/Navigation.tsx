import Link from 'next/link'
import styled from 'styled-components'

const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
`

const NavigationItem = styled.li`
  border-top: 1px solid #e69422;
  font-size: 16px;
  font-weight: bold;
  list-style: none;
  padding: 8px;
  text-transform: uppercase;

  :last-of-type {
    border-bottom: 1px solid #e69422;
  }
`

export function Navigation() {
  const menuLinks = [
    { text: 'Início', link: '/' },
    { text: 'Como funciona', link: '/sobre' },
    { text: 'Login', link: '/login' },
    { text: 'Contato', link: '/contato' },
  ]
  return (
    <nav>
      <NavigationList>
        {menuLinks.map((link) => (
          <NavigationItem key={link.text}>
            <Link href={link.link}>
              <a>{link.text}</a>
            </Link>
          </NavigationItem>
        ))}
      </NavigationList>
    </nav>
  )
}
