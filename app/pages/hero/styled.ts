import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Announcement = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  color: #FFF;
  font-family: "Quintessential", cursive;
  font-weight: 400;
  font-size: 6rem;
`;

export const SubTitle = styled.h2`
  color: #FFF;
  font-family: "Quintessential", cursive;
  font-weight: 400;
  font-size: 5rem;
`;

export const MetaTitle = styled.h3`
  color: #FFF;
  line-height: 0.5;
  font-family: "Quintessential", cursive;
  font-weight: 400;
  font-size: 3rem;
`

export const DateContainer = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 3px;
`;

export const DateElement = styled.span`
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  padding: 5px 0px;
  font-size: 2rem;
`;

export const Cover = styled.div`
  background-size: cover;
  position: absolute;
`;

export const Image = styled.img`
  height: 100vh;
  z-index: -1;
  width: 100vw;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: table;
  bottom: 10vh;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  max-width: 90vw;
  margin: 0 auto;
`;

export const TableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
`;
