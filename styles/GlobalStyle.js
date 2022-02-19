import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans';
}

body { 
  overflow-x: hidden; 
  background-color: hsl(235, 21%, 11%);
  }
`;
