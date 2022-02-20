import styled from "styled-components";

export const Container = styled.div`
  width: 530px;
  height: 63px;
  margin-bottom: 2px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;

  &:after {
    content: "";
    display: block;
    width: 540px;
    height: 0.2px;
    background: ${(props) => props.theme.colors.afterColor};
    margin-top: 13px;
  }

  @media (max-width: 640px) {
    width: 450px;

    &:after {
      width: 450px;
    }
  }
`;

export const CheckedContainer = styled.div`
  position: relative;
  top: 20px;
  left: 22px;
  width: 460px;
  height: 40px;

  label {
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid hsl(237, 14%, 26%);
    border-radius: 50%;
    cursor: pointer;
    height: 25px;
    left: 0;
    position: absolute;
    top: 0;
    width: 27px;
  }

  label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 4px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 7px;
    transform: rotate(-45deg);
    width: 8px;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  input[type="checkbox"]:checked + label {
    background-image: linear-gradient(to right bottom, #57ddff, #c058f3);
    border-color: hsl(234, 11%, 52%);
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }

  button {
    font-size: 16px;
    border: none;
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    position: relative;
    left: 40px;
    top: 3px;
    color: ${(props) => props.theme.colors.text};
  }

  .overline {
    text-decoration: line-through;
    color: hsl(234, 11%, 52%);
  }

  @media (max-width: 640px) {
    label:after {
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .iconContainer {
    visibility: hidden;
    font-size: 24px;
    visibility: normal;
    color: ${(props) => props.theme.colors.secundary};
  }
`;
