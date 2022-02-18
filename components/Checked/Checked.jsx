import React from "react";

import { Container, CheckedContainer } from "./styles";

function Checked() {
  return (
    <Container>
      <CheckedContainer>
        <input type="checkbox" defaultChecked />
        <label htmlFor="checkbox"></label>
      </CheckedContainer>
    </Container>
  );
}

export default Checked;
