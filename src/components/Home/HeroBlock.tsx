import Image from 'next/image'
import styled from 'styled-components'
import Button from 'components/Atoms/Button'
import { Header1, Header5 } from 'components/Atoms/Header'

import heroImage from 'public/hero-image.png'
import mediaQuery from 'src/mixins/mediaQuery'

const HeroBlock = () => {
  return (
    <HeroSection>
      <HalfSide>
        <Header1>
          Mauris blandit aliquet elit, eget tincidunt nibh <em>pulvinar</em> a.
          Donec rutrum congue leo eget <em>malesuada</em>.
        </Header1>
        <Header5>
          Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet
          et, porttitor at sem. Sed porttitor lectus nibh. Nulla porttitor
          accumsan tincidunt.
        </Header5>
        <Button>Buscar</Button>
      </HalfSide>
      <HalfSide>
        <Image alt="hero alt" src={heroImage} />
      </HalfSide>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${mediaQuery.greaterThan('tablet')`
    flex-direction: row;
  `}
`

const HalfSide = styled.section`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0 48px 48px;

  &:nth-child(even) {
    padding: 24px 12px 48px;
  }
`

export default HeroBlock
