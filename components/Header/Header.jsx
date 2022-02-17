import React from "react";
import { BsSunFill as Sun } from "react-icons/bs";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <div>
        <h1>Todo</h1>
        <Sun />
      </div>
    </Container>
  );
}

export default Header;
