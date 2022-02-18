import React from "react";

import { Container, MiddleTextContainer } from "./styles";

function Footer() {
  return (
    <Container>
      <div>
        <p>5 items left</p>
      </div>
      <MiddleTextContainer>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </MiddleTextContainer>
      <div>
        <p>Clear Completed</p>
      </div>
    </Container>
  );
}

export default Footer;
