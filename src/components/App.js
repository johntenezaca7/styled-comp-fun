import React, { Component } from "react";
import styled, { ThemeProvider  } from "styled-components";

// Styled Components
import { 
  GlobalStyle, 
  Section,
  Theme,
  Title, 
  Button,
  DivWrapper
} from "./styled/Index";

// Components
import TabSwitcher from "./TabSwitcher";
import { Tab, TabPanel } from "./TabSwitcherContext";
import Search from "./SearchParams";

import Pet from "./Pet";

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 20rem;
  justify-content: space-between;
  margin-bottom: 1rem;
`;


DivWrapper.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 'a',
          details: {
            name: "Poo",
            animal: "dog",
            breed: "poodle"
          }
        },
        {
          id: 'b',
          details: {
            name: "Yeet",
            animal: "Cat",
            breed: "Street"
          }
        },
        {
          id: 'c',
          details: {
            name: "Skoot",
            animal: "dog",
            breed: "poodle"
          }
        },
        {
          id: 'd',
          details: {
            name: "Lip",
            animal: "dog",
            breed: "poodle"
          }
        },
    ]
    }
  }

  render() {
    return (
      <Section>
        <GlobalStyle />  
        <Title id="something-important">Tab Switcher</Title>
        <Search />
        <TabSwitcher>
          <BtnWrapper>
            {this.state.items.map(item => {
              return (
                <Tab id={item.id} key={item.id}>
                  <Button>{ item.id.toLocaleUpperCase() }</Button>
                </Tab>
              );
            })}
          </BtnWrapper>
          <DivWrapper>
            {this.state.items.map(item => {
              return (
                <TabPanel whenActive={item.id} key={item.id}>
                  <Pet 
                    name={item.details.name} 
                    animal={item.details.animal} 
                    breed={item.details.breed}
                  />
                </TabPanel>
              );
            })}
          </DivWrapper>
        </TabSwitcher>
      </Section>
    );
  }
};

export default App;

