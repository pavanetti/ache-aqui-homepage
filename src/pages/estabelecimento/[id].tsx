import { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'

import { Header2 } from 'components/Atoms/Header'
import { Row, Col } from 'components/Atoms/Layout'
import Button from 'components/Atoms/Button'

interface StablishmentPageProps {
  stablishment: {
    name: string
    image: string
    description: string
  }
}

const StablishmentPage: NextPage<StablishmentPageProps> = ({
  stablishment,
}) => {
  return (
    <Wrapper>
      <Row tablet={2}>
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
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Wrapper>
  )
}

StablishmentPage.getInitialProps = async (ctx) => {
  return {
    stablishment: {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      description: `Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.`,
    },
  }
}

export default StablishmentPage

const Wrapper = styled.div`
  max-width: 968px;
  padding: 80px;
`

const Description = styled.div`
  color: #656565;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 24px 0;
`
