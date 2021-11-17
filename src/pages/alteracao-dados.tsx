import { Header2, Header5 } from 'components/Atoms/Header'
import { Col, Row } from 'components/Atoms/Layout'
import { AccessForm } from 'components/Forms/AccessForm'
import { StablishmentForm } from 'components/Forms/StablishmentForm'
import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'

const EditionPage = () => {
  return (
    <Wrapper>
      <HeaderSection tablet={2}>
        <Col>
          <Header2>Alteração de Dados</Header2>
          <Header5>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Header5>
        </Col>
      </HeaderSection>
      <Row tablet={2}>
        <Col>
          <AccessForm />
        </Col>
        <Col>
          <StablishmentForm />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default EditionPage

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
`

const HeaderSection = styled(Row)`
  margin-bottom: 32px;
`
