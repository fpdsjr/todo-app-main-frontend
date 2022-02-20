import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import { Container } from "../styles/Container";
import Checked from "../components/Checked/Checked";
import { CardContainer } from "../styles/CardContainer";
import Footer from "../components/Footer/Footer";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const url = "https://todo-app-prisma-express.herokuapp.com";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [allToDos, setAllToDos] = useState([]);
  const [filterInput, setFilterInput] = useState("");

  const fetchApi = async () => {
    const result = await axios.get(`${url}/listalltodo`);
    setAllToDos(result.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const addToDo = (e) => {
    if (e.key === "Enter") {
      axios
        .post(`${url}/todo`, {
          description: inputValue,
          active: true,
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          // console.log(error);
        });
      setInputValue("");
    }
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(allToDos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setAllToDos(items);
  };

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        addToDo={addToDo}
      />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="toDos">
          {(provided) => (
            <CardContainer {...provided.droppableProps} ref={provided.innerRef}>
              {allToDos
                .filter((e) => {
                  if (filterInput) {
                    const verifyBoolean = filterInput === "true";
                    return e.active === verifyBoolean;
                  }
                  return e;
                })
                .map(({ description, id, active }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Checked
                          description={description}
                          id={id}
                          active={active}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
              <Footer
                todoLength={allToDos.length}
                setFilterInput={setFilterInput}
              />
            </CardContainer>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default App;
