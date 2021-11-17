import { Header3 } from 'components/Atoms/Header'
import TextInput from 'components/Atoms/TextInput'
import { Label } from 'components/Atoms/Label'
import styled from 'styled-components'
import { Col, Row } from 'components/Atoms/Layout'
import { FileUploader } from 'components/Atoms/FileUploader'

export function AccessForm() {
  return (
    <Wrapper>
      <Header3>Dados para Acesso</Header3>
      <Label>Seu nome:</Label>
      <TextInput placeholder="Nome" />

      <Label>Seu melhor e-mail:</Label>
      <TextInput placeholder="E-mail" />

      <Label>Defina uma senha:</Label>
      <TextInput placeholder="Senha" type="password" />

      <SocialNetworks>
        <Header3>Redes Sociais</Header3>
        <Label>Instagram:</Label>
        <TextInput placeholder="Instagram" />

        <Label>Facebook:</Label>
        <TextInput placeholder="Facebook" />

        <Label>Whatsapp:</Label>
        <TextInput placeholder="Whatsapp" type="tel" />
        <Row tablet={2} rowGap={0}>
          <Col>
            <Label>Foto de Capa:</Label>
            <FileUploader />
          </Col>
          <Col>
            <Label>Fotos:</Label>
            <FileUploader limit={5} />
          </Col>
        </Row>
      </SocialNetworks>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${TextInput} {
    width: 100%;
  }
`

const SocialNetworks = styled.div`
  margin: 32px 0 0;
`
