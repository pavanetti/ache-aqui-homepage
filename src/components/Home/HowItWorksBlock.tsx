import { Header5 } from 'components/Atoms/Header'
import RadioButton from 'components/Atoms/RadioButton'
import styled from 'styled-components'

const HowItWorksBlock = () => {
  return (
    <HiwForm>
      <div>
        <div>
          <RadioButton value="buscar" name="action">
            Busca
          </RadioButton>
          <RadioButton value="cadastrar" name="action">
            Cadastro
          </RadioButton>
        </div>
        <Header5>
          Donec sollicitudin molestie malesuada. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Curabitur non nulla
          sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui.
        </Header5>
      </div>
    </HiwForm>
  )
}

const HiwForm = styled.form`
  background: #f1f1f1;
  padding: 48px;
`

export default HowItWorksBlock
