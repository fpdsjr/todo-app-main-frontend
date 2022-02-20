import React, { useState } from "react";
import axios from "axios";
import { Container, MiddleTextContainer } from "./styles";

const url = "https://todo-app-prisma-express.herokuapp.com";

function Footer({ todoLength, setFilterInput }) {
  const [activeClass, setActiveClass] = useState({
    activeObject: null,
    phrases: [
      { phrases: "All" },
      { phrases: "Active" },
      { phrases: "Completed" },
    ],
  });

  function toggleActive(index) {
    setActiveClass({
      ...activeClass,
      activeObject: activeClass.phrases[index],
    });
  }

  function toggleActiveStyles(index) {
    if (activeClass.phrases[index] === activeClass.activeObject) {
      return "active";
    }
    return "inactive";
  }

  const handleClick = (e) => {
    if (e.target.id === "Completed") {
      setFilterInput("false");
    }
    if (e.target.id === "Active") {
      setFilterInput("true");
    }
    if (e.target.id === "All") {
      setFilterInput("");
    }
  };

  const handleDelete = async () => {
    const deleteToDo = await axios.delete(`${url}/deletetodo`);

    return deleteToDo;
  };

  return (
    <Container>
      <div>
        <p>{`${todoLength.length} items left`}</p>
      </div>
      <div className="middleContent">
        {activeClass.phrases.map((e, index) => (
          <MiddleTextContainer key={index} onClick={() => toggleActive(index)}>
            <button
              className={toggleActiveStyles(index)}
              id={e.phrases}
              onClick={(e) => handleClick(e)}
            >
              {e.phrases}
            </button>
          </MiddleTextContainer>
        ))}
      </div>
      <div>
        <button onClick={() => handleDelete()}>Clear Completed</button>
      </div>
    </Container>
  );
}

export default Footer;
