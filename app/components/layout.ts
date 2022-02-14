import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-x: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.palate.white};
`;

export const Page = styled.div`
  position: relative;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
`

export const Container = styled.div`
  margin: 0 18vw;

  @media (max-width: 1000px) {
    margin: 0 10vw;
  }

  @media (max-width: 400px) {
    margin: 0 5vw;
  }
`;
