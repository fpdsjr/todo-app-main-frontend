import React from "react";

import { Container } from "./styles";
import { InputCheckBox } from "./styles";

function Input({ inputValue, setInputValue, addToDo }) {
  return (
    <Container>
      <InputCheckBox>
        <input type="checkbox" />
        <label htmlFor="checkbox"></label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => addToDo(e)}
          placeholder="Create a new todo..."
        />
      </InputCheckBox>
    </Container>
  );
}

export default Input;
