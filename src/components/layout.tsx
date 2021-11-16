import { FC } from 'react'
import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'

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
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;

  > * {
    width: 100%;
  }
`
