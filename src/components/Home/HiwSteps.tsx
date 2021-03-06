import { FC } from 'react'
import { Header3 } from 'components/Atoms/Header'
import styled from 'styled-components'

import SignupImage from 'public/Como_Funciona_Cadastro.svg'
import SearchImage from 'public/Como_Funciona_Busca.svg'
import Action from './HiwAction'
import mediaQuery from 'mixins/mediaQuery'

interface HiwStepsProps {
  action: Action
}

const HiwSteps: FC<HiwStepsProps> = ({ action }) => {
  const signupSteps = [
    'Escolha a cidade em que deseja encontrar um estabelecimento',
    'Defina qual categoria está procurando e veja estabelecimentos que podem te atender',
    'Entrar na página do estabelecimento entrar em contato ou ir até o lugar',
  ]
  const searchSteps = [
    'Entre na página do cadastro',
    'Preencha os dados e envie fotos legais do seu estabelecimento',
    'Pronto! Agora é só aguardar novos clientes chegarem',
  ]

  const options = {
    buscar: {
      steps: searchSteps,
      Image: SearchImage,
    },
    cadastrar: {
      steps: signupSteps,
      Image: SignupImage,
    },
  }[action]

  return (
    <StepsContainer>
      <StepsList>
        {options.steps.map((step, index) => (
          <StepBlock key={step}>
            <StepHeader>
              <Number>{index + 1}</Number>
              <HeaderText>Passo {index + 1}</HeaderText>
            </StepHeader>
            <Text>{step}</Text>
          </StepBlock>
        ))}
      </StepsList>
      <ImageDiv>
        <options.Image />
      </ImageDiv>
    </StepsContainer>
  )
}

export default HiwSteps

const StepsContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  min-width: 280px;

  ${mediaQuery.greaterThan('tablet')`
    order: 1;
  `}

  ${mediaQuery.greaterThan('desktopL')`
    max-width: 720px;
  `}
`

const StepsList = styled.div`
  ${mediaQuery.greaterThan('desktopL')`
    display: flex;
  `}
`

const StepBlock = styled.div`
  margin: 24px 0;

  ${mediaQuery.greaterThan('desktopL')`
    &:first-child {
      margin-left: 48px;
      margin-right: 36px;
      margin-top: 200px;
    }
    &:nth-child(3) {
      margin-left: 112px;
      margin-top: 80px;
    }
  `}
`

const StepHeader = styled.div`
  display: flex;
  align-items: center;
`

const Number = styled.span`
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  color: white;
  display: inline-flex;
  font-size: 16px;
  height: 36px;
  justify-content: center;
  margin-right: 16px;
  width: 36px;
`

const HeaderText = styled(Header3)`
  margin: 12px 0;
`

const Text = styled.div`
  color: ${(props) => props.theme.text.gray};
  font-size: 14px;
  margin-left: 52px;
  max-width: 168px;
`

const ImageDiv = styled.div`
  margin: 48px 0;
  width: 100%;

  ${mediaQuery.greaterThan('tablet')`
    display: none;
  `}

  ${mediaQuery.greaterThan('desktopL')`
    display: block;
    margin: -16px 64px 48px 0;
    width: 416px;
  `}
`
