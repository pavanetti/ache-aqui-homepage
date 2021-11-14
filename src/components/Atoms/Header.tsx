import styled from 'styled-components'

export const Header1 = styled.h1`
  font-size: 30px;
  line-height: 40px;
  margin: 12px 0;

  em {
    color: ${(props) => props.theme.colors.primary};
    font-style: normal;
  }
`

export const Header2 = styled.h2`
  font-size: 24px;
  line-height: 32px;
  margin: 24px 0 0;
`

export const Header3 = styled.h3`
  font-size: 20px;
  line-height: 28px;
  margin: 12px 0;
`

export const Header4 = styled.h4`
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 12px 0;
`

export const Header5 = styled.h5`
  color: #656565;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 12px 0;
`