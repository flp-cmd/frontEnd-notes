import styled from "styled-components";

export const Container = styled.button`
  width: 11.3rem;
  height: 2.1rem;

  color: ${({ theme, $isactive }) => $isactive == "true" ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.1rem;
  text-align: center;

  cursor: pointer;
  background: none;
  border: none;
`;
