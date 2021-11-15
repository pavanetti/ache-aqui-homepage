import { Search } from '@styled-icons/boxicons-regular'
import styled from 'styled-components'
import TextInput from './TextInput'

const SearchInput = ({ className }) => {
  return (
    <Wrapper className={className}>
      <TextInput placeholder="Buscar" />
      <SearchIcon size={24} />
    </Wrapper>
  )
}

export default SearchInput

const Wrapper = styled.div`
  position: relative;
`

const SearchIcon = styled(Search)`
  position: relative;
  left: -32px;
`
