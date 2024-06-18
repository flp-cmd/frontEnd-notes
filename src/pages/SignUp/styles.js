import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
`

export const Form = styled.form`
  width: 61.2rem;
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
    font-weight: 500;
  }

  > p {
    margin-top: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > button:nth-of-type(1) {
    margin-top: 1.6rem;
  }

  > a {
    button {
      width: 100%;
      font-size: 1.6rem;
      font-weight: 400;
      margin-top: 8rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`