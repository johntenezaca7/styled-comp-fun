import React from "react";
import styled, { createGlobalStyle  } from "styled-components";

export { Button } from "./Elements/Button";
export { Title } from "./Elements/Title";
export { Section } from "./Elements/Section";

export const Theme = {
  main: "mediumseagreen"
};

export const DivWrapper = styled.div`
  border: #70A288 2px solid;
  padding 2rem;
  margin: 1rem 0;
`;

export const GlobalStyle = createGlobalStyle`
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