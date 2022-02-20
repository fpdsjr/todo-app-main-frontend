import styled from "styled-components";
import bgdark from "../../assets/images/bg-desktop-dark.jpg";
import desktop from "../../assets/images/bg-mobile-dark.jpg";
import bgwhite from "../../assets/images/bg-desktop-light.jpg";

export const Container = styled.header`
  width: 100%;
  height: 300px;
  background-image: ${(props) =>
    props.theme.title === "dark" ? `url(${bgdark})` : `url(${bgwhite})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 540px;
    margin-bottom: 105px;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 15px;
    font-weight: 700;
    font-size: 40px;
  }

  svg {
    cursor: pointer;
    font-size: 24px;
  }

  @media (max-width: 640px) {
    padding: 20px;
    background: black;
    /* background-image: url(${desktop}); */
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      font-size: 26px;
    }
  }
`;
