import { NavigationAndContacts } from './NavigationAndContacts'
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

  @media (min-width: 768px) {
    align-items: flex-end;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <NavigationAndContacts />
      <SocialSection />
      <CopyrightTagline />
    </FooterContainer>
  )
}

export default Footer
