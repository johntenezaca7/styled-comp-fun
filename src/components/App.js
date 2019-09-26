import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

// Styled Components
import {
  GlobalStyle,
  Section,
  Theme,
  Title,
  Button,
  DivWrapper
} from "./Styled/Index";

// Components
import TabSwitcher from "./TabSwitch/TabSwitcher";
import { Tab, TabPanel } from "./TabSwitch/TabSwitcherContext";
import Search from "./SearchParam/SearchParams";

import Pet from "./Pet/Pet";

import appState from "./utils/appDummyState";

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
  render() {
    return (
      <Section>
        <GlobalStyle />
        <Title id="something-important">Tab Switcher</Title>
        <Search />
        <TabSwitcher>
          <BtnWrapper>
            { 
              this.props.items !== null ? 
                this.props.items.map(item => {
                  return (
                    <Tab id={item.id} key={item.id}>
                      <Button>{item.id.toLocaleUpperCase()}</Button>
                    </Tab>
                  );
                }) : null
            }
          </BtnWrapper>
          <DivWrapper>
            {
              this.props.items !== null ?
                this.props.items.map(item => {
                  return (
                    <TabPanel whenActive={item.id} key={item.id}>
                      <Pet
                        name={item.details.name}
                        animal={item.details.animal}
                        breed={item.details.breed}
                      />
                    </TabPanel>
                  );
                }) : null
            }
          </DivWrapper>
        </TabSwitcher>
      </Section>
    );
  }
};

export default App;

