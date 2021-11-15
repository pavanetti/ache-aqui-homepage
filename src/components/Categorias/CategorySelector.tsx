import { useCallback, useState } from 'react'

import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'
import CategoryCard from './CategoryCard'
import OpenButton from './OpenButton'

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

  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <SelectorContainer>
      <SelectorHeader>Categorias</SelectorHeader>
      <CategoryList>
        {categories.map((category, idx) => (
          <CategoryCard
            key={category.name}
            category={category}
            isActive={isOpen}
            position={idx + 1}
          />
        ))}
      </CategoryList>
      <CategoryOpenButon isOpen={isOpen} toggleState={toggle} />
    </SelectorContainer>
  )
}

export default CategorySelector

const SelectorContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  position: relative;
`

const SelectorHeader = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
`

const CategoryList = styled.div`
  ${mediaQuery.greaterThan('desktop')`
    display: flex;
    justify-content: space-between;
  `}
`

const CategoryOpenButon = styled(OpenButton)`
  bottom: 0;
  position: absolute;
  transform: translateY(50%);
`
