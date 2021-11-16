import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'
import StablishmentCard from './StablishmentCard'

const StablishmentList = () => {
  const stablishments = [
    {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      description: 'Loja de material de construções, ferramentas e muito mais.',
      phone: '(11) 99999&#8209;9999',
      instagram: '@casaconstrucao',
      facebook: '/cadaconstrucao',
      openingHours: 'Seg a Sex: 8h às 18h\nSab: 8h às 12h',
      address: 'Bairro Centro',
    },
    {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      description: 'Loja de material de construções, ferramentas e muito mais.',
      phone: '(11) 99999&#8209;9999',
      instagram: '@casaconstrucao',
      facebook: '/cadaconstrucao',
      openingHours: 'Seg a Sex: 8h às 18h\nSab: 8h às 12h',
      address: 'Bairro Centro',
    },
    {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      description: 'Loja de material de construções, ferramentas e muito mais.',
      phone: '(11) 99999&#8209;9999',
      instagram: '@casaconstrucao',
      facebook: '/cadaconstrucao',
      openingHours: 'Seg a Sex: 8h às 18h\nSab: 8h às 12h',
      address: 'Bairro Centro',
    },
    {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      description: 'Loja de material de construções, ferramentas e muito mais.',
      phone: '(11) 99999&#8209;9999',
      instagram: '@casaconstrucao',
      facebook: '/cadaconstrucao',
      openingHours: 'Seg a Sex: 8h às 18h\nSab: 8h às 12h',
      address: 'Bairro Centro',
    },
    {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      description: 'Loja de material de construções, ferramentas e muito mais.',
      phone: '(11) 99999&#8209;9999',
      instagram: '@casaconstrucao',
      facebook: '/cadaconstrucao',
      openingHours: 'Seg a Sex: 8h às 18h\nSab: 8h às 12h',
      address: 'Bairro Centro',
    },
    {
      name: 'Casa da construção',
      image: 'https://picsum.photos/300/200',
      description: 'Loja de material de construções, ferramentas e muito mais.',
      phone: '(11) 99999&#8209;9999',
      instagram: '@casaconstrucao',
      facebook: '/cadaconstrucao',
      openingHours: 'Seg a Sex: 8h às 18h\nSab: 8h às 12h',
      address: 'Bairro Centro',
    },
  ]
  return (
    <ListContainer>
      {stablishments.map((stablishment) => (
        <StablishmentCard key={stablishment.name} stablishment={stablishment} />
      ))}
    </ListContainer>
  )
}

export default StablishmentList

const ListContainer = styled.div`
  align-center;
  display: flex;
  flex-direction: column;

  ${mediaQuery.greaterThan('tablet')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  `}

  ${mediaQuery.greaterThan('desktopL')`
    grid-template-columns: repeat(4, 1fr);
  `}

  ${mediaQuery.greaterThan('desktopXL')`
    grid-template-columns: repeat(6, 1fr);
  `}
`
