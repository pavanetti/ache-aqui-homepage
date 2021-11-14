import Image from 'next/image'
import styled from 'styled-components'
import Button from 'components/Atoms/Button'
import { Header1, Header4 } from 'components/Atoms/Header'

import heroImage from 'public/hero-image.png'
import mediaQuery from 'mixins/mediaQuery'

const HeroBlock = () => {
  return (
    <HeroSection>
      <HalfSide>
        <Header1>
          Mauris blandit aliquet elit, eget tincidunt nibh <em>pulvinar</em> a.
          Donec rutrum congue leo eget <em>malesuada</em>.
        </Header1>
        <Header4>
          Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet
          et, porttitor at sem. Sed porttitor lectus nibh. Nulla porttitor
          accumsan tincidunt.
        </Header4>
        <SearchButton>Buscar</SearchButton>
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
    text-align: left;
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

  ${mediaQuery.greaterThan('tablet')`
    padding-left: 120px;
  `}

  &:nth-child(even) {
    padding-left: 12px;
    padding-right: 12px;
  }
`

const SearchButton = styled(Button)`
  margin-top: 36px;
`

export default HeroBlock
