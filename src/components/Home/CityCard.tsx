import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import mediaQuery from 'mixins/mediaQuery'

interface CityCardProps {
  city: {
    name: string
    image: string
  }
}

const CityCard: FC<CityCardProps> = ({ city }) => {
  return (
    <Figure>
      <FigCaption>{city.name}</FigCaption>
      <Image src={city.image} alt={city.name} width="390" height="260" />
    </Figure>
  )
}

export default CityCard

const Figure = styled.figure`
  border-radius: 8px;
  display: flex;
  margin: 24px 0 0;
  overflow: hidden;
  position: relative;

  ${mediaQuery.greaterThan('tablet')`
    flex: 1 1 calc(100% / 3 - 32px);
    margin: 16px;
  `}
`

const FigCaption = styled.figcaption`
  color: white;
  font-size: 20px;
  left: 16px;
  line-height: 24px;
  position: absolute;
  text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  top: 8px;
  z-index: 100;
`
