import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spasing(2)};
  margin-bottom: ${p => p.theme.spasing(10)};
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: ${p => p.theme.spasing(1)};
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.color.accent};
  }
`;
