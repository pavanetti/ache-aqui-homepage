import styled from 'styled-components'

import Logo from '../logo.svg'
import Menu from './Menu'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo width={86} height={44} fill="#204372" />
      <Menu />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
`
