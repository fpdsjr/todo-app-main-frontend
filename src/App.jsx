import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import { Container } from "../styles/Container";
import Checked from "../components/Checked/Checked";
import { CardContainer } from "../styles/CardContainer";
import Footer from "../components/Footer/Footer";

const url = "https://todo-app-prisma-express.herokuapp.com";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [allToDos, setAllToDos] = useState([]);

  const fetchApi = async () => {
    const result = await axios.get(`${url}/listalltodo`);
    setAllToDos(result.data);
  };

  useEffect(() => {
    fetchApi();
  }, [allToDos]);

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

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        addToDo={addToDo}
      />
      <CardContainer>
        {allToDos.map(({ description, id }) => (
          <Checked key={id} description={description} id={id} />
        ))}
        <Footer />
      </CardContainer>
      {console.log(inputValue)}
    </Container>
  );
}

export default App;
