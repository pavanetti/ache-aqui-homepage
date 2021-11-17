import styled from 'styled-components'

import mediaQuery from 'mixins/mediaQuery'
import { Header1, Header3, Header5 } from 'components/Atoms/Header'
import { Col, Row } from 'components/Atoms/Layout'
import { FieldSet } from 'components/Atoms/FieldSet'
import TextInput from 'components/Atoms/TextInput'
import Button from 'components/Atoms/Button'
import { Label } from 'components/Atoms/Label'
import { SelectInput } from 'components/Atoms/SelectInput'

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
            <Header3>Dados do Estabelecimento</Header3>

            <Label>Nome do estabelecimento:</Label>
            <TextInput placeholder="Nome do Estabelecimento" />

            <Label>CNPJ/CPF do Estabelecimento/Proprietário:</Label>
            <TextInput placeholder="CPF ou CNPJ" />

            <Label>Qual categoria de segmento que atua:</Label>
            <SelectInput>
              <option disabled selected>
                Selecionar
              </option>
              <option>Saúde</option>
              <option>Supermercado</option>
              <option>Restaurante</option>
              <option>Varejão</option>
              <option>Oficina</option>
            </SelectInput>

            <Label>Tipo de estabelecimento:</Label>
            <SelectInput>
              <option disabled selected>
                Tipo
              </option>
              <option>Saúde</option>
              <option>Supermercado</option>
              <option>Restaurante</option>
              <option>Varejão</option>
              <option>Oficina</option>
            </SelectInput>

            <Label>Telefone:</Label>
            <TextInput placeholder="Número de Telefone" />
            <Row phone={2}>
              <Col>
                <Label>CEP:</Label>
                <TextInput placeholder="CEP" />

                <Label>Cidade:</Label>
                <TextInput placeholder="Cidade" />
              </Col>
              <Col>
                <Label>Estado:</Label>
                <TextInput placeholder="Estado" />

                <Label>Bairro:</Label>
                <TextInput placeholder="Bairro" />
              </Col>
            </Row>

            <Label>Horário de funcionamento:</Label>
            <TextInput placeholder="Dias da semana / Horas" />
          </Col>
          <Col>
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
            </SocialNetworks>
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

  ${TextInput}, ${SelectInput} {
    width: 100%;
  }

  ${Button} {
    align-self: flex-end;
  }
`

const FormSelectInput = styled(SelectInput)`
  width: 100%;
`

const Description = styled(Header5)`
  max-width: 560px;
  text-align: center;
`

const SocialNetworks = styled.div`
  margin: 32px 0;
`
