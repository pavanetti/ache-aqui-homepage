import CategorySelector from 'components/Categorias/CategorySelector'
import styled from 'styled-components'

const Categorias = () => {
  return (
    <PageContainer>
      <CategorySelector />
    </PageContainer>
  )
}

export default Categorias

const PageContainer = styled.div`
  padding: 48px;
`
