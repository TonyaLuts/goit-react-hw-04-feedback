import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spasing(5)};
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 28px;
`;
