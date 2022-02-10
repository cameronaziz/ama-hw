import styled from 'styled-components';

export const PersonName = styled.h3`
  font-family: Didot;
  flex-direction: column;
  display-flex: flex;
`;

export const PersonNameElement = styled.div`
`;

export const ImageContainer = styled.div`
  position:relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius:50%;
  overflow:hidden;
`;

export const HeartContainer = styled.div`
  font-size: 60px;
  margin-top: 100%;
  font-weight: 900;
  color: #DD8484;
`;

export const Image = styled.img`
  position:absolute;
  object-fit: cover;
  width:100%;
  height:100%;
`

export const Title = styled.h2`
  font-family: Didot;
  font-weight: bold;
  color: #DD8484;
`

export const Announcement = styled.p`
  font-family: Didot;
  font-weight: bold;
`;
