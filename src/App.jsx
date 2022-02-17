import  React, { useState, useEffect } from "react"
import axios from "axios"
import { GlobalStyle } from "../styles/GlobalStyle";
import { Header } from "../styles/Header";
import darkIcon from "../assets/images/icon-moon.svg"

const url = "https://todo-app-prisma-express.herokuapp.com";


function App() {
  const[inputValue, setInputValue ] = useState('')
  const[allToDos, setAllToDos] = useState([])
  
  
  const fetchApi = async () => { 
    const result = await axios.get(`${url}/listalltodo`);
    setAllToDos(result.data)
} 
  
  
  useEffect(() => {
    fetchApi();
  }, [allToDos])
  

  const addToDo = (e) => {
    if(e.key === "Enter") {
        axios.post(`${url}/todo`, {
        description: inputValue,
        active: true
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
      setInputValue('')
    }
  }



  return ( 
    <div>
      <GlobalStyle />
      <Header>
        <h1>Todo</h1>
        <img src="darkIcon" alt="darkIcon"></img>
      </Header>
      
    </div>
  )
}

export default App
