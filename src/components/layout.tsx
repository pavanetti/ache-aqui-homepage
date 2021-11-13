import { FC } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

const Layout: FC = ({ children }) => {
  return (
    <GlobalContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </GlobalContainer>
  )
}

export default Layout

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentContainer = styled.div`
  flex: 1;
`
