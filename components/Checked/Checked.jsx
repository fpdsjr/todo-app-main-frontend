import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, CheckedContainer, ButtonsContainer } from "./styles";
import { IoMdClose as CloseIcon } from "react-icons/io";

const url = "https://todo-app-prisma-express.herokuapp.com";

function Checked({ description, id, active, fetchApi }) {
  const [checked, setChecked] = useState("");
  const [matchesId, setMachedId] = useState(false);
  const [fetching, setFetching] = useState(false);

  const disableTodo = async (id) => {
    setFetching(true);
    const disable = await axios.put(`${url}/todo/${id}`);
    setFetching(false);
    return disable;
  };

  useEffect(() => {
    fetchApi();
  }, [fetching]);

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
        <ButtonsContainer>
          <button
            className="descriptiontext"
            id={id}
            className={matchesId || !active ? "overline" : ""}
            onClick={(e) => handleDoubleClick(e)}
          >
            {description}
          </button>
          <button>
            <CloseIcon className="iconContainer" />
          </button>
        </ButtonsContainer>
      </CheckedContainer>
    </Container>
  );
}

export default Checked;
