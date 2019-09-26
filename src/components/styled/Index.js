import React from "react";
import styled, { createGlobalStyle  } from "styled-components";

import { Button } from "./Button";
import { Title } from "./Title";
import { Section } from "./Section";

const Theme = {
  main: "mediumseagreen"
};

const DivWrapper = styled.div`
  border: ${ props => props.theme.main} 2px solid;
  padding 2rem;
  margin: 1rem 0;
`;

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Exo&display=swap');
    padding: 0;
    margin: 0;
    font-family: 'Exo', sans-serif;

    #root  {
      margin: 0;
    }
  }
`

export { Button, Title, Section, Theme, GlobalStyle, DivWrapper };