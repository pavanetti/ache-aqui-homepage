import Link from 'next/link'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Facebook, Instagram, Twitter } from '@styled-icons/boxicons-logos'

import Logo from '../../public/logo.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <Social />
      <CopyrightTagline />
    </div>
  )
}

export default Footer

function Navigation() {
  const menuLinks = [
    { text: 'Início', link: '/' },
    { text: 'Como funciona', link: '/sobre' },
    { text: 'Login', link: '/login' },
    { text: 'Contato', link: '/contato' },
  ]
  return (
    <nav className={styles.nav}>
      <ul className={styles['links-container']}>
        {menuLinks.map((link) => (
          <li key={link.text} className={styles.link}>
            <Link href={link.link}>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const SocialIconsWrapper = styled.div`
  ${StyledIconBase} {
    color: white;
    margin: 6px;
  }
`

const Social = () => {
  return (
    <div className={styles['social-container']}>
      <Logo width={86} height={44} fill="white" />
      <SocialIconsWrapper>
        <Twitter size={24} />
        <Facebook size={24} />
        <Instagram size={24} />
      </SocialIconsWrapper>
    </div>
  )
}

const CopyrightTagline = () => {
  return (
    <div className={styles['copyright-container']}>
      <Link href="/termos-e-condicoes">
        <a>Termos e condições</a>
      </Link>
      <div>2021 - Ache Aqui | Direitos Reservados</div>
    </div>
  )
}
