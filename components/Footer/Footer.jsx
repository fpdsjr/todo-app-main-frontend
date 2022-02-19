import React, { useState } from "react";

import { Container, MiddleTextContainer } from "./styles";

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

  return (
    <Container>
      <div>
        <p>{`${todoLength} items left`}</p>
      </div>
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
      <div>
        <button>Clear Completed</button>
      </div>
    </Container>
  );
}

export default Footer;
