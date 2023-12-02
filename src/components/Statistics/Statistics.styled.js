import styled from 'styled-components';

export const StstisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(2)};
`;

export const StstisticsItem = styled.li`
  font-size: 18px;
`;

export const Count = styled.span`
  font-weight: 700;
  color: ${p => p.theme.color.count};
`;
