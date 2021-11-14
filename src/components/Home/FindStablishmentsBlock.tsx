import Button from 'components/Atoms/Button'
import { Header2, Header3, Header5 } from 'components/Atoms/Header'
import styled from 'styled-components'
import CitiesList from './CitiesList'

const FindStablishmentsBlock = () => {
  return (
    <BlockSection>
      <Header2>Encontre estabelecimentos associados</Header2>
      <Header5>
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet
        nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna
        dictum por
      </Header5>
      <CitiesList />
      <Header3>
        Gostaria de cadastrar seu estabelecimento em nosso site? Não perca
        tempo, cadastre&#8209;se já!
      </Header3>
      <SignupButton>Cadastrar</SignupButton>
    </BlockSection>
  )
}

export default FindStablishmentsBlock

const BlockSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 48px;
  text-align: center;
`

const SignupButton = styled(Button)`
  margin-top: 36px;
`
