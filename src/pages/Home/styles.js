import styled from "styled-components"
import { Link } from "react-router-dom";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`


export const Menu = styled.div`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 6.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  > button {
    font-weight: 400;
  }
`


export const Search  = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`


export const Content = styled.div`
  grid-area: content;
  padding: 6.4rem 6.4rem 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`


export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  font-size: 2rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: .8rem;
  }

`