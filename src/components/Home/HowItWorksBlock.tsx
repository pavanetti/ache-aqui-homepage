import Button from 'components/Atoms/Button'
import { Header2, Header5 } from 'components/Atoms/Header'
import RadioButton from 'components/Atoms/RadioButton'
import { useState } from 'react'
import styled from 'styled-components'

const HowItWorksBlock = () => {
  const [action, setAction] = useState('buscar')

  return (
    <HiwForm>
      <div>
        <Header2 gray>Como funciona</Header2>
        <RadioGroup>
          <RadioButton
            value="buscar"
            name="action"
            input={action}
            onChange={setAction}
          >
            Busca
          </RadioButton>
          <RadioButton
            value="cadastrar"
            name="action"
            input={action}
            onChange={setAction}
          >
            Cadastro
          </RadioButton>
        </RadioGroup>
        <Header5>
          Donec sollicitudin molestie malesuada. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Curabitur non nulla
          sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui.
        </Header5>
      </div>
      <Button>
        {action === 'buscar' ? 'Buscar estabelecimento' : 'Cadastrar'}
      </Button>
    </HiwForm>
  )
}

const HiwForm = styled.form`
  background: #f1f1f1;
  padding: 48px;
  text-align: center;
`

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export default HowItWorksBlock
