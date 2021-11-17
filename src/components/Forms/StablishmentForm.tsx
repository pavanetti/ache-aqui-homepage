import { Header3 } from 'components/Atoms/Header'
import { Col, Row } from 'components/Atoms/Layout'
import TextInput from 'components/Atoms/TextInput'
import { Label } from 'components/Atoms/Label'
import { SelectInput } from 'components/Atoms/SelectInput'
import styled from 'styled-components'

export function StablishmentForm() {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${TextInput}, ${SelectInput} {
    width: 100%;
  }
`
