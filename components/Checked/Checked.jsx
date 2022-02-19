import React, { useState } from "react";
import axios from "axios";
import { Container, CheckedContainer } from "./styles";

const url = "https://todo-app-prisma-express.herokuapp.com";

function Checked({ description, id, active }) {
  const [checked, setChecked] = useState("");
  const [matchesId, setMachedId] = useState(false);

  const disableTodo = async (id) => {
    const disable = await axios.put(`${url}/todo/${id}`);
    console.log(disable);
    return disable;
  };

  const toggleLineThrough = (e) => {
    setChecked(e.target.id);
    const id = e.target.id;
    const getId = document.querySelectorAll("button");
    getId.forEach((e) => {
      if (e.id === checked) {
        setMachedId(!matchesId);
        disableTodo(id);
      }
    });
  };

  const handleDoubleClick = (e) => {
    const id = e.target.id;
    setMachedId(!matchesId);
    disableTodo(id);
  };

  return (
    <Container>
      <CheckedContainer>
        <input
          type="checkbox"
          id={id}
          checked={matchesId || !active ? true : false}
          onChange={(e) => toggleLineThrough(e)}
        />
        <label htmlFor={id}></label>
        <button
          id={id}
          className={matchesId || !active ? "overline" : ""}
          onClick={(e) => handleDoubleClick(e)}
        >
          {description}
        </button>
      </CheckedContainer>
    </Container>
  );
}

export default Checked;
