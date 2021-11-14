import { FC } from 'react'
import Image from 'next/image'
import { Header3 } from 'components/Atoms/Header'
import styled from 'styled-components'

import signupImage from 'public/ilustracao-cadastro.png'
import searchImage from 'public/ilustracao-busca.png'
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
      image: searchImage,
    },
    cadastrar: {
      steps: signupSteps,
      image: signupImage,
    },
  }[action]

  return (
    <StepsContainer>
      {options.steps.map((step, index) => (
        <StepBlock key={step}>
          <StepHeader>
            <Number>{index + 1}</Number>
            <Header3>Passo {index + 1}</Header3>
          </StepHeader>
          <Text>{step}</Text>
        </StepBlock>
      ))}
      <ImageDiv>
        <Image alt="" src={options.image} />
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
`

const StepBlock = styled.div`
  margin: 24px 0;
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

const Text = styled.div`
  color: #656565;
  font-size: 14px;
  margin-left: 52px;
  max-width: 168px;
`

const ImageDiv = styled.div`
  margin: 48px 0;

  ${mediaQuery.greaterThan('tablet')`
    display: none;
  `}
`
