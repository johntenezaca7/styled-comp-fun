import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Exo&display=swap');
    padding: 0;
    margin: 0;
    font-family: 'Exo', sans-serif;

    #root  {
      margin: 0;
    }
  }
`;