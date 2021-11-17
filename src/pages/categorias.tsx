import SearchInput from 'components/Atoms/SearchInput'
import TextInput from 'components/Atoms/TextInput'
import CategorySelector from 'components/Categorias/CategorySelector'
import RegisterStablishment from 'components/Categorias/RegisterStablishment'
import StablishmentList from 'components/Categorias/StablishmentList'
import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'

const Categorias = () => {
  return (
    <PageContainer>
      <CategorySelector />
      <Search />
      <StablishmentList />
      <RegisterStablishment />
    </PageContainer>
  )
}

export default Categorias

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px;

  ${mediaQuery.greaterThan('tablet')`
    padding: 48px 80px 80px;
  `}

  ${mediaQuery.greaterThan('desktop')`
    padding: 48px 120px 120px;
  `}
`

const Search = styled(SearchInput)`
  margin: 48px 0 16px;
`
