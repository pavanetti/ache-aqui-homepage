import Link from 'next/link'
import styled from 'styled-components'
import mediaQuery from 'mixins/mediaQuery'

const CopyrightContainer = styled.div`
  flex-basis: 100%;
  font-size: 12px;
  line-height: 24px;
  text-align: center;

  ${mediaQuery.greaterThan('tablet')`
    border-top: 1px solid ${(props) => props.theme.colors.accent};
    display: flex;
    justify-content: space-between;
    padding: 8px 120px;
  `}
`

export const CopyrightTagline = () => {
  return (
    <CopyrightContainer>
      <Link href="/termos-e-condicoes">
        <a>Termos e condições</a>
      </Link>
      <div>2021 - Ache Aqui | Direitos Reservados</div>
    </CopyrightContainer>
  )
}
