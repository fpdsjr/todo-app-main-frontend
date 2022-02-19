import React from "react";

import { Container } from "./styles";
import { InputCheckBox } from "./styles";

function Input() {
  return (
    <Container>
      <InputCheckBox>
        <input type="checkbox" />
        <label htmlFor="lol"></label>
        <input type="text" placeholder="Create a new todo..." />
      </InputCheckBox>
    </Container>
  );
}

export default Input;
