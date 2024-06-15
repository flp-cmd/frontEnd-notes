import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 10.5rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 4rem;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 0.9rem;
    line-height: 2rem;

    span {
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }

  &:hover{
    > svg{
      color: red
    }
  }
`
