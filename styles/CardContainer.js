import styled from "styled-components";

export const CardContainer = styled.div`
  width: 540px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 25px;

  @media (max-width: 640px) {
    width: 450px;
  }
`;
