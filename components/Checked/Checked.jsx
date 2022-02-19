import React, { useState } from "react";

import { Container, CheckedContainer } from "./styles";

function Checked({ description, id }) {
  const [checked, setChecked] = useState("");
  const [matchesId, setMachedId] = useState(false);
  const [doubleClickedId, setDoubleClickedId] = useState("");

  const toggleLineThrough = (e) => {
    setChecked(e.target.id);
    const getId = document.querySelectorAll("button");
    getId.forEach((e) => {
      if (e.id === checked) {
        setMachedId(!matchesId);
      }
    });
  };

  const handleDoubleClick = (e) => {
    setMachedId(!matchesId);
  };

  return (
    <Container>
      <CheckedContainer>
        <input
          type="checkbox"
          id={id}
          checked={matchesId ? true : false}
          onChange={(e) => toggleLineThrough(e)}
        />
        <label htmlFor={id}></label>
        <button
          id={id}
          className={matchesId ? "overline" : ""}
          onClick={(e) => handleDoubleClick(e)}
        >
          {description}
        </button>
      </CheckedContainer>
    </Container>
  );
}

export default Checked;
