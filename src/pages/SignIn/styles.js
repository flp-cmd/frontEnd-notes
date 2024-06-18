import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
`

export const Form = styled.form`
  width: 63.7rem;
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
  }

  > p {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > button {
    margin-top: 2.4rem;
  }

  > a  {
    button {
      font-size: 1.6rem;
      font-weight: 400;
      margin-top: 12.4rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`