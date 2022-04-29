import styled, { css } from "styled-components";

type ContainerProps = {
  backG?: string
}

export const Container = styled.figure<ContainerProps>`
  background: ${({ backG }) => (backG ? backG : 'transparent')};
  margin: 1rem;
`