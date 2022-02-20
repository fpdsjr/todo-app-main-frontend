import React from "react";
import { BsSunFill as Sun } from "react-icons/bs";
import { Container } from "./styles";

function Header({ toggleTheme }) {
  return (
    <Container>
      <div>
        <h1>Todo</h1>
        <Sun onClick={toggleTheme} />
      </div>
    </Container>
  );
}

export default Header;
