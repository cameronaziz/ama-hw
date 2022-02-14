import styled from 'styled-components';

export const PersonName = styled.h3`
  font-family: ${({ theme }) => theme.font.regular};
  flex-direction: column;
  display-flex: flex;
`;

export const PersonNameElement = styled.div`
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

export const HeartContainer = styled.div`
  font-size: ${({ theme }) => theme.size.xl};
  margin-top: 100%;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
`;

export const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.regular};
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
`

export const Announcement = styled.p`
  font-family: ${({ theme }) => theme.font.regular};
  font-weight: bold;
`;
