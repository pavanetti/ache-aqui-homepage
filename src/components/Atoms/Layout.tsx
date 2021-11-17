import mediaQuery from 'mixins/mediaQuery'
import styled from 'styled-components'

interface RowProps {
  phone?: number
  tablet?: number
  desktop?: number
  desktopL?: number
  desktopXL?: number
  rowGap?: number
  colGap?: number
}

export const Row = styled.div<RowProps>`
  display: grid;
  grid-column-gap: ${(props) =>
    props.colGap !== undefined ? props.colGap : 32}px;
  grid-row-gap: ${(props) =>
    props.rowGap !== undefined ? props.rowGap : 32}px;
  grid-template-columns: repeat(${(props) => colsFor('phone', props)}, 1fr);

  ${mediaQuery.greaterThan('tablet')`
    grid-template-columns: repeat(${(props) => colsFor('tablet', props)}, 1fr);
  `}

  ${mediaQuery.greaterThan('desktop')`
    grid-template-columns: repeat(${(props) => colsFor('desktop', props)}, 1fr);
  `}

  ${mediaQuery.greaterThan('desktopL')`
    grid-template-columns: repeat(${(props) =>
      colsFor('desktopL', props)}, 1fr);
  `}

  ${mediaQuery.greaterThan('desktopXL')`
    grid-template-columns: repeat(${(props) =>
      colsFor('desktopXL', props)}, 1fr);
  `}
`

function colsFor(size: string, props: RowProps) {
  switch (size) {
    case 'desktopXL':
      if (props.desktopXL) return props.desktopXL
    case 'desktopL':
      if (props.desktopL) return props.desktopL
    case 'desktop':
      if (props.desktop) return props.desktop
    case 'tablet':
      if (props.tablet) return props.tablet
    case 'phone':
      if (props.phone) return props.phone
    default:
      return 1
  }
}

type Position = 'flex-start' | 'center' | 'flex-end'
interface ColProps {
  align?: Position
  justify?: Position
}

export const Col = styled.div<ColProps>`
  align-items: ${(props) => props.align};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
`

Col.defaultProps = {
  align: 'flex-start',
  justify: 'flex-start',
}
