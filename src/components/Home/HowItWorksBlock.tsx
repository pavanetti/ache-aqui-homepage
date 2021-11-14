import Button from 'components/Atoms/Button'
import { Header2 } from 'components/Atoms/Header'
import RadioButton from 'components/Atoms/RadioButton'
import { useState } from 'react'
import styled from 'styled-components'
import Action from './HiwAction'
import HiwSteps from './HiwSteps'

const HowItWorksBlock = () => {
  const [action, setAction] = useState<Action>('buscar')

  return (
    <HiwForm>
      <div>
        <Header2 gray>Como funciona</Header2>
        <RadioGroup>
          <RadioButton
            value="buscar"
            name="action"
            input={action}
            onChange={setAction as (value: string) => void}
          >
            Busca
          </RadioButton>
          <RadioButton
            value="cadastrar"
            name="action"
            input={action}
            onChange={setAction as (value: string) => void}
          >
            Cadastro
          </RadioButton>
        </RadioGroup>
        <Text>
          Donec sollicitudin molestie malesuada. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Curabitur non nulla
          sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui.
        </Text>
      </div>
      <HiwSteps action={action} />
      <Button>
        {action === 'buscar' ? 'Buscar estabelecimento' : 'Cadastrar'}
      </Button>
    </HiwForm>
  )
}

const HiwForm = styled.form`
  align-items: center;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  padding: 48px;
`

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const Text = styled.div`
  color: #656565;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 12px 0;
  text-align: center;
`

export default HowItWorksBlock
