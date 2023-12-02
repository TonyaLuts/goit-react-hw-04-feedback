import styled from 'styled-components';

export const Container = styled.div`
  margin: ${p => p.theme.spasing(10)} auto;
  padding: ${p => p.theme.spasing(10)};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color: ${p => p.theme.color.bg};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;
