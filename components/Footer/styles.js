import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 75px;
  height: 50px;
  font-size: 14px;
  color: hsl(234, 11%, 52%);
  .active {
    color: hsl(220, 98%, 61%);
  }
`;

export const MiddleTextContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin-right: -60px;
  p {
    margin-right: 20px;
  }
`;
