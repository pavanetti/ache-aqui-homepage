import { css } from 'styled-components'

const breakpoints = {
  phone: '480px',
  tablet: '768px',
  desktop: '1024px',
  desktopL: '1440px',
  desktopXL: '2560px',
}

type Breakpoint = 'phone' | 'tablet' | 'desktop' | 'desktopL' | 'desktopXL'
type Relation = 'greater' | 'less'

const respondTo = (
  breakpoint: Breakpoint,
  relation: Relation,
  ...args: any[]
) => {
  const operator = {
    greater: 'min-width',
    less: 'max-width',
  }[relation]
  return css`
    @media (${operator}: ${breakpoints[breakpoint]}) {
      ${css.apply(null, args as any)};
    }
  `
}

const mediaQuery = {
  greaterThan: (breakpoint: Breakpoint) =>
    respondTo.bind(null, breakpoint, 'greater'),
  lessThan: (breakpoint: Breakpoint) =>
    respondTo.bind(null, breakpoint, 'less'),
}

export default mediaQuery
