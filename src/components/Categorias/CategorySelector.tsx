import styled from 'styled-components'
import CategoryCard from './CategoryCard'

const CategorySelector = () => {
  const categories = [
    {
      name: 'Saúde',
      linkTo: 'categoria/saude',
      image: 'https://picsum.photos/300/200',
    },
    {
      name: 'Supermercado',
      linkTo: 'categoria/supermercado',
      image: 'https://picsum.photos/300/200',
    },
    {
      name: 'Restaurantes',
      linkTo: 'categoria/restaurantes',
      image: 'https://picsum.photos/300/200',
    },
    {
      name: 'Varejão',
      linkTo: 'categoria/varejao',
      image: 'https://picsum.photos/300/200',
    },
    {
      name: 'Oficinas',
      linkTo: 'categoria/oficinas',
      image: 'https://picsum.photos/300/200',
    },
  ]

  return (
    <CategoryList>
      <ListHeader>Categorias</ListHeader>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </CategoryList>
  )
}

export default CategorySelector

const CategoryList = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
`

const ListHeader = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
`
