import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'
import CityCard from './CityCard'

const CitiesList = () => {
  const cities = [
    { name: 'Cidade 01', image: 'https://picsum.photos/300/200' },
    { name: 'Cidade 02', image: 'https://picsum.photos/300/200' },
    { name: 'Cidade 03', image: 'https://picsum.photos/300/200' },
    { name: 'Cidade 04', image: 'https://picsum.photos/300/200' },
    { name: 'Cidade 05', image: 'https://picsum.photos/300/200' },
    { name: 'Cidade 06', image: 'https://picsum.photos/300/200' },
  ]
  return (
    <CitiesListContainer>
      {cities.map((city) => (
        <CityCard key={city.name} city={city} />
      ))}
    </CitiesListContainer>
  )
}

export default CitiesList

const CitiesListContainer = styled.div`
  margin: 24px 0;

  ${mediaQuery.greaterThan('tablet')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`
