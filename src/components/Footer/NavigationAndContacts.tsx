import Link from 'next/link'
import styled from 'styled-components'

const NavigationContainer = styled.nav`
  @media (min-width: 768px) {
    border-right: 1px solid #e69422;
    padding: 0 24px;
  }
`

const NavigationHeader = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-weight: bold;
    padding: 12px 8px;
    text-transform: uppercase;
  }
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

  @media (min-width: 768px) {
    border: none;
    text-align: left;
    text-transform: none;

    :last-of-type {
      border: none;
    }
  }
`

function Navigation() {
  const menuLinks = [
    { text: 'Início', link: '/' },
    { text: 'Como funciona', link: '/sobre' },
    { text: 'Login', link: '/login' },
    { text: 'Contato', link: '/contato' },
  ]
  return (
    <NavigationContainer>
      <NavigationHeader>Ache aqui</NavigationHeader>
      <NavigationList>
        {menuLinks.map((link) => (
          <NavigationItem key={link.text}>
            <Link href={link.link}>
              <a>{link.text}</a>
            </Link>
          </NavigationItem>
        ))}
      </NavigationList>
    </NavigationContainer>
  )
}

const ContactContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    padding: 0 24px;
  }
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

  @media (min-width: 768px) {
    border: none;
    text-align: left;
    text-transform: none;

    :last-of-type {
      border: none;
    }
  }
`

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
  @media (min-width: 768px) {
    display: flex;
    padding: 24px 80px 24px 0;
  }
`
export function NavigationAndContacts() {
  return (
    <CoreContainer>
      <Navigation />
      <Contacts />
    </CoreContainer>
  )
}
