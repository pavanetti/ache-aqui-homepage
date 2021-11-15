import CategorySelector from 'components/Categorias/CategorySelector'
import RegisterStablishment from 'components/Categorias/RegisterStablishment'
import StablishmentList from 'components/Categorias/StablishmentList'
import styled from 'styled-components'

const Categorias = () => {
  return (
    <PageContainer>
      <CategorySelector />
      <StablishmentList />
      <RegisterStablishment />
    </PageContainer>
  )
}

export default Categorias

const PageContainer = styled.div`
  padding: 48px;
`
