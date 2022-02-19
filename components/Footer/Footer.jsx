import React, { useState } from "react";

import { Container, MiddleTextContainer } from "./styles";

function Footer() {
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

  return (
    <Container>
      <div>
        <p>5 items left</p>
      </div>
      {activeClass.phrases.map((e, index) => (
        <MiddleTextContainer
          key={index}
          className={toggleActiveStyles(index)}
          onClick={() => toggleActive(index)}
        >
          <p>{e.phrases}</p>
        </MiddleTextContainer>
      ))}

      <div>
        <p>Clear Completed</p>
      </div>
    </Container>
  );
}

export default Footer;
