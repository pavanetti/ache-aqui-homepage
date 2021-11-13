import { css } from "styled-components";

const breakpoints = {
    phone: '480px',
    tablet: '768px',
    desktop: '1024px',
    desktopL: '1440px',
    desktopXL: '2560px',
};

type Breakpoint = 'phone' | 'tablet' | 'desktop' | 'desktopL' | 'desktopXL';

const respondTo = (breakpoint: Breakpoint, ...args: any[]) => css`
  @media (min-width: ${breakpoints[breakpoint]}) {
    ${css(...args)};
  }
`

const mediaQuery: Record<Breakpoint, Function> = Object.keys(breakpoints).reduce((acc: any, breakpoint: Breakpoint) => {
  acc[breakpoint] = respondTo.bind(null, breakpoint);
  return acc
}, {}) as any


export default mediaQuery;
