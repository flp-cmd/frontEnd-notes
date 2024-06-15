import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3rem;

    h1 {
    font-size: 3.6rem;
    }
    
    .backButton {
      font-size: 2rem;
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > button {
    height: 5.6rem;
    margin-top: 3.4rem;
  }
`