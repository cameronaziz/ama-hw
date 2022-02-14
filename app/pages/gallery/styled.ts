import styled from 'styled-components';

export const Images = styled.div`
  line-height: 0;
  column-count: 5;
  column-gap: ${({ theme }) => theme.size.xs};

  @media ${({ theme }) => theme.screen.desktop} {
    column-count: 4;
  }

  @media ${({ theme }) => theme.screen.small} {
    column-count: 3;
  }

  @media ${({ theme }) => theme.screen.tablet} {
    column-count: 2;
  }

  @media ${({ theme }) => theme.screen.mobile} {
    column-count: 1;
  }
`;

export const Image = styled.img`
   width: 100%;
   height: auto;
   margin-bottom: ${({ theme }) => theme.size.xs};
   transition: filter 2s;
   border-radius: ${({ theme }) => theme.size.xxs};
`;
