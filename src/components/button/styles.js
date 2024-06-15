import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: block;
  border: 0;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 5rem;

  &:disabled {
    opacity: 0.5;
  }

`

