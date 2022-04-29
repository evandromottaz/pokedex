import styled from 'styled-components';

type ContainerProps = {
  backG?: string
}

export const Container = styled.header<ContainerProps>`
  background: ${({ backG }) => (backG)};
  ${({theme}) => theme.container};
  padding: 2rem;
`;

export const Logo = styled.figure`
  width: 200px;
`
