import Link from 'next/link'
import styled from 'styled-components'
import mediaQuery from '../../mixins/mediaQuery'

export function NavigationAndContacts() {
  return (
    <CoreContainer>
      <Navigation />
      <Contacts />
    </CoreContainer>
  )
}

function Navigation() {
  const menuLinks = [
    { text: 'Início', path: '/' },
    { text: 'Como funciona', path: '/sobre' },
    { text: 'Login', path: '/login' },
    { text: 'Contato', path: '/contato' },
  ]
  return (
    <NavigationContainer>
      <NavigationHeader>Ache aqui</NavigationHeader>
      <NavigationList>
        {menuLinks.map((link) => (
          <NavigationItem key={link.text}>
            <Link href={link.path}>
              <a>{link.text}</a>
            </Link>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationContainer>
  )
}

function Contacts() {
  const data = ['55 9 99999-9999', 'email@email.com', 'Av. X N° Y - Brasília']
  return (
    <ContactContainer>
      <NavigationHeader>Contato</NavigationHeader>
      {data.map((item) => (
        <ContactItem key={item}>{item}</ContactItem>
      ))}
    </ContactContainer>
  )
}

const CoreContainer = styled.div`
  ${mediaQuery.greaterThan('tablet')`
    display: flex;
    padding: 24px 80px 24px 0;
  `}
`

const NavigationContainer = styled.nav`
  ${mediaQuery.greaterThan('tablet')`
    border-right: 1px solid #e69422;
    padding: 0 24px;
  `}
`

const NavigationHeader = styled.span`
  display: none;

  ${mediaQuery.greaterThan('tablet')`
    display: block;
    font-weight: bold;
    padding: 12px 8px;
    text-transform: uppercase;
  `}
`

const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
`

const NavigationItem = styled.li`
  border-top: 1px solid #e69422;
  font-size: 16px;
  list-style: none;
  padding: 8px;
  text-transform: uppercase;

  :last-of-type {
    border-bottom: 1px solid #e69422;
  }

  ${mediaQuery.greaterThan('tablet')`
    border: none;
    text-align: left;
    text-transform: none;

    :last-of-type {
      border: none;
    }
  `}
`

const ContactContainer = styled.div`
  display: none;

  ${mediaQuery.greaterThan('tablet')`
    display: block;
    padding: 0 24px;
  `}
`

const ContactItem = styled.div`
  border-top: 1px solid #e69422;
  font-size: 16px;
  list-style: none;
  padding: 8px;
  text-align: center;
  text-transform: uppercase;

  :last-of-type {
    border-bottom: 1px solid #e69422;
  }

  ${mediaQuery.greaterThan('tablet')`
    border: none;
    text-align: left;
    text-transform: none;

    :last-of-type {
      border: none;
    }
  `}
`
