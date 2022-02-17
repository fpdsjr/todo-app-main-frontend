import React from "react";
import { FiSun as Sun } from "react-icons/fi";
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
