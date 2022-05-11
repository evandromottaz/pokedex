import styled, { css } from "styled-components";

type ContainerProps = {
  backG?: string
}

export const Container = styled.figure<ContainerProps>`
  background: ${({ backG }) => (backG ? backG : 'transparent')};
  padding: 1rem;
  border-radius: 20px;
  border: 6px solid #000;
`

export const Image = styled.div`
  background-color: #fff;
  background-position: center;
  border-radius: 50%;
  border: 4px solid #333;
  margin: auto;
  padding: 10px;
  box-shadow: 0 0 5px 0px #000;

  img {
    margin: auto;
  }
`

export const Title = styled.button`
  text-transform: capitalize;
  letter-spacing: 2px;
  border: 4px solid #000;
  padding: 5px 15px;
  margin: 2rem auto 0;
  border-radius: 20px;
  box-shadow: 0 0 5px 0px #000;
`