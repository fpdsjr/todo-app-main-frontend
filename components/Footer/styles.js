import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 75px;
  height: 50px;
  font-size: 14px;
  color: hsl(234, 11%, 52%);

  button {
    cursor: pointer;
    color: hsl(234, 11%, 52%);
    background: ${(props) => props.theme.colors.primary};
    border: none;
    margin-right: 20px;

    :hover {
      color: white;
    }
  }

  .active {
    color: hsl(220, 98%, 61%);
  }

  @media (max-width: 640px) {
    gap: 10px;

    button {
      margin-left: 20px;
    }
  }
`;

export const MiddleTextContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin-right: -60px;
  p {
    background: hsl(235, 24%, 19%);
    border: none;
    margin-right: 20px;
  }
`;
