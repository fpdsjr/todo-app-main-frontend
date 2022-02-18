import styled from "styled-components";

export const Container = styled.div`
  width: 540px;
  height: 63px;
  background-color: white;
  border-radius: 5px;
  background-color: hsl(235, 24%, 19%);
  display: flex;
  gap: 30px;
  margin: 0 auto;
  margin-top: -142px;
`;

export const InputCheckBox = styled.div`
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

  input {
    font-size: 18px;
    color: hsl(234, 39%, 85%);
    background-color: hsl(235, 24%, 19%);
    position: relative;
    bottom: 28px;
    left: 45px;
    height: 25px;
    width: 450px;
    margin-right: 50px;
    border: none;
  }

  input::placeholder {
    font-size: 18px;
    color: hsl(234, 11%, 52%);
  }
`;
