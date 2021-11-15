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
  ]
  return (
    <div style={{ display: 'flex' }}>
      <StablishmentCard stablishment={stablishments[0]} />
    </div>
  )
}

export default StablishmentList
