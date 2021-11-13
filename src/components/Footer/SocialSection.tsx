import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Facebook, Instagram, Twitter } from '@styled-icons/boxicons-logos'

import Logo from 'public/logo.svg'
import Button from 'components/Atoms/Button'
import mediaQuery from 'mixins/mediaQuery'

const SocialContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${mediaQuery.greaterThan('tablet')`
    padding-left: 96px;
  `}
`

const SocialIconsWrapper = styled.div`
  ${StyledIconBase} {
    color: white;
    margin: 6px;
  }
`

const SignupButton = styled(Button)`
  display: none;
  ${mediaQuery.greaterThan('tablet')`
    display: block;
    margin: 12px;
  `}
`

export const SocialSection = () => {
  return (
    <SocialContainer>
      <Logo width={86} height={44} fill="white" />
      <SocialIconsWrapper>
        <Twitter size={24} />
        <Facebook size={24} />
        <Instagram size={24} />
      </SocialIconsWrapper>
      <SignupButton secondary>Cadastrar</SignupButton>
    </SocialContainer>
  )
}
