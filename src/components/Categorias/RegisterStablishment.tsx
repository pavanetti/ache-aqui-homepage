import Button from 'components/Atoms/Button'
import styled from 'styled-components'

const RegisterStablishment = () => {
  return (
    <div>
      <Text>
        Gostaria de cadastrar seu estabelecimento nessa categoria? Não perca
        tempo, cadastre-se já e tenha visibidade
      </Text>
      <Button>Cadastrar</Button>
    </div>
  )
}

export default RegisterStablishment

const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 32px;
  max-width: 544px;
`
