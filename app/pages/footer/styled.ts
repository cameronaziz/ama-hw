import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.size.md};
  padding: ${({ theme }) => theme.size.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palate.white};
  background: ${({ theme }) => theme.color.primary};
`;

export const Content = styled.div`
  height: ${({ theme }) => theme.size.md};
`;
