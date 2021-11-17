import Image from 'next/image'
import styled from 'styled-components'
import Button from 'components/Atoms/Button'
import { Header1, Header4 } from 'components/Atoms/Header'

import heroImage from 'public/hero-image.png'
import mediaQuery from 'mixins/mediaQuery'
import { Col, Row } from 'components/Atoms/Layout'

const HeroBlock = () => {
  return (
    <HeroSection>
      <Row tablet={2}>
        <LeftCol>
          <Header1>
            Mauris blandit aliquet elit, eget tincidunt nibh <em>pulvinar</em>{' '}
            a. Donec rutrum congue leo eget <em>malesuada</em>.
          </Header1>
          <Tagline>
            Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Sed porttitor lectus nibh. Nulla porttitor
            accumsan tincidunt.
          </Tagline>
          <CtaButton>Buscar</CtaButton>
        </LeftCol>
        <RightCol>
          <Image alt="hero alt" src={heroImage} />
        </RightCol>
      </Row>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${mediaQuery.greaterThan('tablet')`
    text-align: left;
    flex-direction: row;
  `}
`

const LeftCol = styled(Col)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 48px 48px;

  ${mediaQuery.greaterThan('tablet')`
    padding-left: 120px;
  `}
`

const RightCol = styled(Col)`
  margin-bottom: 48px;
`

const Tagline = styled(Header4)`
  margin-top: 24px;
`

const CtaButton = styled(Button)`
  margin-top: 36px;
`

export default HeroBlock
