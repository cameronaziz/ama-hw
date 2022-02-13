import styled from 'styled-components';

export const Images = styled.div`
  line-height: 0;
  -webkit-column-count: 5; /* split it into 5 columns */
  -webkit-column-gap: 5px; /* give it a 5px gap between columns */
  -moz-column-count: 5;
  -moz-column-gap :5px;
  column-count: 5;
  column-gap: 5px;


  @media (max-width: 1200px) {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }

  @media (max-width: 1000px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }

  @media (max-width: 800px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 400px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
`;

export const Image = styled.img`
   width: 100% !important;
   height: auto !important;
   margin-bottom: 5px;
   transition: filter 2s;
`;
