import { FC } from 'react'
import Image from 'next/image'
import he from 'he'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

import { Header3 } from 'components/Atoms/Header'
import { Facebook, Instagram, Whatsapp } from '@styled-icons/boxicons-logos'
import { Map, TimeFive } from '@styled-icons/boxicons-regular'
import { Col, Row } from 'components/Atoms/Layout'

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
      <Image src={stablishment.image} alt="" width="600" height="400" />
      <CardInformations>
        <PinIcon />
        <StablishmentName>{stablishment.name}</StablishmentName>
        <Description>{stablishment.description}</Description>
        <Row phone={2} colGap={8}>
          <Col>
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
          </Col>
          <Col>
            <Item>
              <TimeFive size={24} />
              {stablishment.openingHours}
            </Item>
            <Item>
              <Map size={24} />
              {stablishment.address}
            </Item>
          </Col>
        </Row>
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
  overflow: hidden;
`

const PinIcon = styled(Map)`
  background: white;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  color: red;
  height: 40px;
  padding: 8px;
  position: absolute;
  right: 24px;
  top: 0;
  transform: translateY(-50%);
  width: 40px;
`

const CardInformations = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-top: none;
  border-radius: 0 0 4px 4px;
  padding: 12px;
  position: relative;
`

const StablishmentName = styled(Header3)`
  margin: 12px 0;
`

const Description = styled.span`
  color: ${(props) => props.theme.text.gray};
  font-size: 12px;
`

const Item = styled.span`
  align-items: center;
  color: ${(props) => props.theme.text.gray};
  display: flex;
  font-size: 12px;
  margin: 8px 0;

  ${StyledIconBase} {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 4px;
    min-width: 24px;
  }
`
