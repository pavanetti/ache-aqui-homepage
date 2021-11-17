import { Header2, Header5 } from 'components/Atoms/Header'
import RegisterStablishment from 'components/Categorias/RegisterStablishment'
import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'
import CitiesList from './CitiesList'

const FindStablishmentsBlock = () => {
  return (
    <BlockSection>
      <SectionHeader>Encontre estabelecimentos associados</SectionHeader>
      <Header5>
        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet
        nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna
        dictum por
      </Header5>
      <CitiesList />
      <RegisterStablishment />
    </BlockSection>
  )
}

export default FindStablishmentsBlock

const BlockSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 48px;
  text-align: center;

  ${mediaQuery.greaterThan('tablet')`
    padding: 48px 120px;
  `}
`

const SectionHeader = styled(Header2)`
  margin: 24px 0;
`
