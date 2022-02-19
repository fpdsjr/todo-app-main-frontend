import React, { useState } from "react";

import { Container, CheckedContainer } from "./styles";

function Checked({ description, id }) {
  const [checked, setChecked] = useState("");
  const [matchesId, setMachedId] = useState(false);

  const toogleLineThrough = (e) => {
    setChecked(e.target.id);
    const getId = document.querySelectorAll("p");
    getId.forEach((e) => {
      if (e.id === checked) {
        setMachedId(!matchesId);
      }
    });
  };

  return (
    <Container>
      <CheckedContainer>
        <input type="checkbox" id={id} onChange={(e) => toogleLineThrough(e)} />
        <label htmlFor={id}></label>
        <p id={id} className={matchesId ? "overline" : ""}>
          {description}
        </p>
      </CheckedContainer>
    </Container>
  );
}

export default Checked;
