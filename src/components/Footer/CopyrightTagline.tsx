import Link from 'next/link'
import styled from 'styled-components'

const CopyrightContainer = styled.div`
  font-size: 12px;
  line-height: 24px;
  text-align: center;
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
