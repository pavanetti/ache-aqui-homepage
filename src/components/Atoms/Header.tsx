import styled from 'styled-components'

export const Header1 = styled.h1`
  font-size: 30px;
  line-height: 40px;
  margin: 24px 0;

  em {
    color: ${(props) => props.theme.primaryColor};
    font-style: normal;
  }
`

export const Header5 = styled.h5`
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 24px 0;
`
