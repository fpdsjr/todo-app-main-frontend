import React from "react";

import { Container } from "./styles";
import { InputCheckBox } from "./styles";

function Input() {
  return (
    <Container>
      <InputCheckBox>
        <input type="checkbox" defaultChecked id="checkbox" />
        <label htmlFor="checkbox"></label>
      </InputCheckBox>
    </Container>
  );
}

export default Input;
