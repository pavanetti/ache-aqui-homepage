import { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

import { Header2 } from 'components/Atoms/Header'
import { Row, Col } from 'components/Atoms/Layout'
import Button from 'components/Atoms/Button'
import { Facebook, Instagram, Whatsapp } from '@styled-icons/boxicons-logos'
import { Map, Phone, TimeFive, World } from '@styled-icons/boxicons-regular'
import RegisterStablishment from 'components/Categorias/RegisterStablishment'

interface StablishmentPageProps {
  stablishment: {
    name: string
    image: string
    map: string
    description: string
    address: string
    phone: string
    whatsapp: string
    instagram: string
    facebook: string
    website: string
    openingHours: string
  }
}

const StablishmentPage: NextPage<StablishmentPageProps> = ({
  stablishment,
}) => {
  return (
    <Wrapper>
      <StablishmentRow>
        <Col>
          <Header2>{stablishment.name}</Header2>
          <Description>{stablishment.description}</Description>
          <Button>Contatar</Button>
        </Col>
        <Col>
          <Image
            src={stablishment.image}
            alt={stablishment.description}
            width={600}
            height={400}
          />
        </Col>
      </StablishmentRow>
      <StablishmentRow>
        <Col justify="center">
          <Item>
            <Phone />
            Telefone: {stablishment.phone}
          </Item>
          <Item>
            <Whatsapp /> Whatsapp: {stablishment.whatsapp}
          </Item>
          <Item>
            <Instagram />
            Instagram: {stablishment.instagram}
          </Item>
          <Item>
            <Facebook />
            Facebook: {stablishment.facebook}
          </Item>
          <Item>
            <World /> Website: {stablishment.website}
          </Item>
          <Item>
            <Map />
            Endereço: {stablishment.address}
          </Item>
          <Item>
            <TimeFive />
            Horário de funcionamento: {stablishment.openingHours}
          </Item>
        </Col>
        <Col>
          <Image
            src={stablishment.map}
            alt={stablishment.address}
            width={600}
            height={600}
          />
        </Col>
      </StablishmentRow>
      <RegisterStablishment />
    </Wrapper>
  )
}

StablishmentPage.getInitialProps = async (ctx) => {
  return {
    stablishment: {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      map: 'https://picsum.photos/400/400',
      description: `Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.`,
      address: 'Av. José Soave N° 170 Bairro - Centro',
      phone: '+55 82 3232-3232',
      whatsapp: '+55 11 99999-9999',
      instagram: '@casaconstrucao',
      facebook: '/casaconstrucao',
      website: 'www.casaconstrucao.com.br',
      openingHours: 'Seg. à Sex. 8:00 - 18:00 | Sáb. 08:00 - 12:00',
    },
  }
}

export default StablishmentPage

const Wrapper = styled.div`
  max-width: 968px;
  padding: 24px 80px 48px;
`

const StablishmentRow = styled(Row).attrs((props) => ({ tablet: 2 }))`
  margin-bottom: 48px;
`

const Description = styled.div`
  color: #656565;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 24px 0;
`

const Item = styled.span`
  align-items: center;
  color: ${(props) => props.theme.text.gray};
  display: flex;
  font-size: 18px;
  margin: 4px 0;

  ${StyledIconBase} {
    color: ${(props) => props.theme.colors.primary};
    margin-right: 4px;
    max-width: 24px;
    min-width: 24px;
  }
`
