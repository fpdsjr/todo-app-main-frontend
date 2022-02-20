import styled from "styled-components";

export const CardContainer = styled.div`
  width: 540px;
  background-color: hsl(235, 24%, 19%);
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 25px;

  @media (max-width: 640px) {
    width: 450px;
  }
`;
