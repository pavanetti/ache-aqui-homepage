import styled from 'styled-components'

import mediaQuery from 'mixins/mediaQuery'
import { Header1, Header5 } from 'components/Atoms/Header'
import { Col, Row } from 'components/Atoms/Layout'
import { FieldSet } from 'components/Atoms/FieldSet'
import Button from 'components/Atoms/Button'
import { StablishmentForm } from 'components/Forms/StablishmentForm'
import { AccessForm } from 'components/Forms/AccessForm'

const SignupPage = () => {
  return (
    <Wrapper>
      <Header1>Cadastro</Header1>
      <Description>
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
        suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo
        eget malesuada.
      </Description>
      <FieldSet>
        <Row tablet={2}>
          <Col>
            <StablishmentForm />
          </Col>
          <Col>
            <AccessForm />
          </Col>
        </Row>
        <Button>Cadastrar</Button>
      </FieldSet>
    </Wrapper>
  )
}

export default SignupPage

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 48px;

  ${mediaQuery.greaterThan('tablet')`
    padding: 48px 80px 80px;
  `}

  ${mediaQuery.greaterThan('desktop')`
    padding: 48px 120px 120px;
  `}

  ${FieldSet} {
    margin: 48px 0;
    max-width: 968px;
    width: 100%;
  }

  ${Button} {
    align-self: flex-end;
    margin-top: 32px;
  }
`

const Description = styled(Header5)`
  max-width: 560px;
  text-align: center;
`
