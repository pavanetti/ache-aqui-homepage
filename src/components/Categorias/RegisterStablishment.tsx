import Button from 'components/Atoms/Button'
import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'

const RegisterStablishment = () => {
  return (
    <Wrapper>
      <Text>
        Gostaria de cadastrar seu estabelecimento nessa categoria? Não perca
        tempo, cadastre-se já e tenha visibidade
      </Text>
      <Button>Cadastrar</Button>
    </Wrapper>
  )
}

export default RegisterStablishment

const Wrapper = styled.div`
  ${mediaQuery.greaterThan('tablet')`
    align-self: flex-start;
    text-align: left;
  `}
`

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 32px;
  max-width: 544px;
`
