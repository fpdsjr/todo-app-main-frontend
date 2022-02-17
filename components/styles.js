import styled from "styled-components";
import bg from "../assets/images/bg-desktop-dark.jpg";

export const Container = styled.header`
  width: 100%;
  height: 300px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 700;
    font-size: 40px;
  }

  svg {
    font-size: 30px;
  }
`;
