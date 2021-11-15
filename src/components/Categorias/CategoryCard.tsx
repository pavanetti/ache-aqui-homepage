import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import mediaQuery from 'mixins/mediaQuery'

interface CategoryCardProps {
  category: {
    name: string
    linkTo: string
    image: string
  }
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={category.linkTo}>
      <a>
        <Figure key={category.name}>
          <Caption>{category.name}</Caption>
          <Image
            src={category.image}
            alt={category.name}
            width="390"
            height="260"
          />
        </Figure>
      </a>
    </Link>
  )
}

export default CategoryCard

const Figure = styled.figure`
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin: 24px 0;
  max-width: 390px;
  overflow: hidden;
  position: relative;

  ${mediaQuery.greaterThan('desktop')`
    margin: 24px 8px;
  `}
`

const Caption = styled.figcaption`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  color: white;
  font-size: 20px;
  left: 50%;
  line-height: 24px;
  padding: 4px 8px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`
