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
  isActive: boolean
  position: number
}

const CategoryCard: FC<CategoryCardProps> = ({
  category,
  isActive,
  position,
}) => {
  const activeClass = isActive && '-active'
  const mobileClass = position === 1 && `-showmobile`
  const desktopClass = position <= 5 && `-showdesktop`
  const className = [activeClass, mobileClass, desktopClass].join(' ')

  return (
    <Link href={category.linkTo}>
      <a>
        <Figure className={className}>
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
  display: none;
  align-items: center;
  margin: 24px 0;
  max-width: 390px;
  overflow: hidden;
  position: relative;

  &.-showmobile,
  &.-active {
    display: flex;
  }

  ${mediaQuery.greaterThan('desktop')`
    margin: 24px 8px;


    &.-showdesktop {
      display: flex;
    }
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
