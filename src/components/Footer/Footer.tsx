import { NavigationAndContacts } from './NavigationAndContacts'
import { CopyrightTagline } from './CopyrightTagline'
import { SocialSection } from './SocialSection'
import styled from 'styled-components'
import mediaQuery from '../../mixins/mediaQuery'

const FooterContainer = styled.div`
  background: #204372;
  color: white;
  padding: 24px 0;

  ${mediaQuery.greaterThan('tablet')`
    align-items: flex-end;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
  `}
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
