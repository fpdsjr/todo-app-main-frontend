import React, { useState } from "react";
import axios from "axios";
import { Container, CheckedContainer } from "./styles";

const url = "https://todo-app-prisma-express.herokuapp.com";

function Checked({ description, id }) {
  const [checked, setChecked] = useState("");
  const [matchesId, setMachedId] = useState(false);

  const disableTodo = async (e) => {
    const id = e.target.id;
    const disable = await axios.put(`${url}/todo/${id}`);
  };

  const toggleLineThrough = (e) => {
    setChecked(e.target.id);
    const getId = document.querySelectorAll("button");
    getId.forEach((e) => {
      if (e.id === checked) {
        setMachedId(!matchesId);
        disableTodo(e);
      }
    });
  };

  const handleDoubleClick = (e) => {
    setMachedId(!matchesId);
    disableTodo(e);
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
