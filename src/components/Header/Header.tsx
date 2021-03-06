import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import mediaQuery from 'mixins/mediaQuery'

import Logo from 'public/logo.svg'
import Menu from './Menu'

const Header = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo width={86} height={44} fill={themeContext.colors.primary} />
        <Menu />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  width: 100%;

  ${mediaQuery.greaterThan('tablet')`
    display: flex;
    justify-content: center;
  `}
`

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;

  ${mediaQuery.greaterThan('tablet')`
    min-width: 768px;
    padding: 24px 36px;
    width: calc(100% - 168px);
  `}
`
