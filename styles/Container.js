import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: hsl(235, 21%, 11%);

  span {
    color: hsl(234, 11%, 52%);
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 40px;
  }

  @media (max-width: 640px) {
    span {
      margin-top: 120px;
    }
  }
`;
