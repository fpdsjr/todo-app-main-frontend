import React from "react";
import { BsSunFill as Sun } from "react-icons/bs";
import { BsFillMoonFill as Moon } from "react-icons/bs";
import { Container } from "./styles";

function Header({ toggleTheme, theme }) {
  return (
    <Container>
      <div>
        <h1>Todo</h1>
        {theme.title === "dark" ? (
          <Sun onClick={toggleTheme} />
        ) : (
          <Moon onClick={toggleTheme} />
        )}
      </div>
    </Container>
  );
}

export default Header;
