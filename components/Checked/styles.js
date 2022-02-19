import styled from "styled-components";

export const Container = styled.div`
  width: 530px;
  height: 63px;
  margin-bottom: 2px;
  background-color: white;
  background-color: hsl(235, 24%, 19%);
  border-radius: 5px;

  &:after {
    content: "";
    display: block;
    width: 540px;
    height: 0.2px;
    background: #cfcfcf;
    margin-top: 13px;
  }
`;

export const CheckedContainer = styled.div`
  position: relative;
  top: 20px;
  left: 22px;
  width: 400px;
  height: 50px;

  label {
    background-color: hsl(235, 24%, 19%);
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

  p {
    position: relative;
    left: 50px;
    top: -10px;
    color: white;
  }

  .overline {
    text-decoration: line-through;
  }
`;
