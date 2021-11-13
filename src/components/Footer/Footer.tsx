import { Navigation } from './Navigation'
import { CopyrightTagline } from './CopyrightTagline'
import { SocialSection } from './SocialSection'
import styled from 'styled-components'

const FooterContainer = styled.div`
  align-items: stretch;
  background: #204372;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Navigation />
      <SocialSection />
      <CopyrightTagline />
    </FooterContainer>
  )
}

export default Footer
