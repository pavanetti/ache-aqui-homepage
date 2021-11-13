import Link from 'next/link'
import styled from 'styled-components'

const CopyrightContainer = styled.div`
  flex-basis: 100%;
  font-size: 12px;
  line-height: 24px;
  text-align: center;

  @media (min-width: 768px) {
    border-top: 1px solid #e69422;
    display: flex;
    justify-content: space-between;
    padding: 8px 120px;
  }
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
