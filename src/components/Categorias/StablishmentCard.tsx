import { FC } from 'react'
import Image from 'next/image'
import he from 'he'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

import { Header3 } from 'components/Atoms/Header'
import { Facebook, Instagram, Whatsapp } from '@styled-icons/boxicons-logos'
import { Map, TimeFive } from '@styled-icons/boxicons-regular'
import mediaQuery from 'mixins/mediaQuery'

interface StablishmentCardProps {
  stablishment: {
    name: string
    image: string
    description: string
    phone: string
    instagram?: string
    facebook?: string
    openingHours: string
    address: string
  }
}

const StablishmentCard: FC<StablishmentCardProps> = ({ stablishment }) => {
  return (
    <CardContainer>
      <Image src={stablishment.image} alt="" width="390" height="260" />
      <CardInformations>
        <Header3>{stablishment.name}</Header3>
        <Description>{stablishment.description}</Description>
        <InfoColumns>
          <HalfColumn>
            <Item>
              <Whatsapp size={24} />
              {he.decode(stablishment.phone)}
            </Item>
            <Item>
              <Instagram size={24} />
              {stablishment.instagram}
            </Item>
            <Item>
              <Facebook size={24} />
              {stablishment.facebook}
            </Item>
          </HalfColumn>
          <HalfColumn>
            <Item>
              <TimeFive size={24} />
              {stablishment.openingHours}
            </Item>
            <Item>
              <Map size={24} />
              {stablishment.address}
            </Item>
          </HalfColumn>
        </InfoColumns>
      </CardInformations>
    </CardContainer>
  )
}

export default StablishmentCard

const CardContainer = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  max-width: 288px;
  overflow: hidden;
`

const CardInformations = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-top: none;
  border-radius: 4px;
  margin-top: -4px;
  padding: 12px;
`

const Description = styled.span`
  color: ${(props) => props.theme.text.gray};
  font-size: 12px;
`

const InfoColumns = styled.div`
  display: flex;

  ${StyledIconBase} {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 4px;
  }
`

const HalfColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  &:first-child {
    white-space: nowrap;
  }
`

const Item = styled.span`
  align-items: center;
  color: ${(props) => props.theme.text.gray};
  display: flex;
  font-size: 12px;
  margin: 8px 16px 0 0;
`
