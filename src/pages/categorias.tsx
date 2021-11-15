import SearchInput from 'components/Atoms/SearchInput'
import TextInput from 'components/Atoms/TextInput'
import CategorySelector from 'components/Categorias/CategorySelector'
import RegisterStablishment from 'components/Categorias/RegisterStablishment'
import StablishmentList from 'components/Categorias/StablishmentList'
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
  padding: 48px;
`

const Search = styled(SearchInput)`
  margin: 48px 0 16px;
`
