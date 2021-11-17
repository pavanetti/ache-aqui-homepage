import Button from 'components/Atoms/Button'
import { Header2 } from 'components/Atoms/Header'
import RadioButton from 'components/Atoms/RadioButton'
import mediaQuery from 'mixins/mediaQuery'
import { useState } from 'react'
import styled from 'styled-components'
import Action from './HiwAction'
import HiwSteps from './HiwSteps'

const HowItWorksBlock = () => {
  const [action, setAction] = useState<Action>('buscar')

  return (
    <HiwForm>
      <FormHeader>
        <HeaderText gray>Como funciona</HeaderText>
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
      </FormHeader>
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

  ${mediaQuery.greaterThan('tablet')`
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 48px 120px;
    max-height: 648px;
  `}
`

const FormHeader = styled.div`
  ${mediaQuery.greaterThan('tablet')`
    display: flex;
    flex: 1 1 40%;
    flex-direction: column;
    max-width: calc(100% - 280px);
    width: 480px;
  `}
`

const HeaderText = styled(Header2)`
  margin: 24px 0;
`

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0;

  ${mediaQuery.greaterThan('tablet')`
    margin-bottom: 48px;
    order: 1;
  `}
`

const Text = styled.div`
  color: #656565;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  text-align: center;

  ${mediaQuery.greaterThan('tablet')`
    text-align: left;
  `}
`

export default HowItWorksBlock
