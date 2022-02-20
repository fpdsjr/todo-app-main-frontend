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
import { ThemeProvider } from "styled-components";
import dark from "../themes/dark";
import light from "../themes/light";

const url = "https://todo-app-prisma-express.herokuapp.com";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [allToDos, setAllToDos] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [theme, setTheme] = useState(dark);

  const fetchApi = async () => {
    const result = await axios.get(`${url}/listalltodo`);
    setAllToDos(result.data);
  };

  useEffect(() => {
    fetchApi();
  }, [inputValue, filterInput]);

  const addToDo = async (e) => {
    if (e.key === "Enter") {
      await axios.post(`${url}/todo`, {
        description: inputValue,
        active: true,
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

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          addToDo={addToDo}
        />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="toDos">
            {(provided) => (
              <CardContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
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
                            fetchApi={fetchApi}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
                <Footer
                  todoLength={allToDos.filter((e) => e.active === true)}
                  setFilterInput={setFilterInput}
                />
              </CardContainer>
            )}
          </Droppable>
        </DragDropContext>
        <span>Drag and drop to reorder list</span>
      </Container>
    </ThemeProvider>
  );
}

export default App;
