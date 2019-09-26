import React from "react";
import { ThemeProvider } from "styled-components";

import TabSwitcherView from "./TabSwitch/TabSwitcherView";
import Search from "./SearchParam/SearchParams";
import { GlobalStyle, Section, Theme, Title } from "./Styled";

const App = (props) => {
  const items = props;
  return (
    <Section>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Title id="something-important">Tab Switcher</Title>
        <Search />
        <TabSwitcherView data={ items }/>
      </ThemeProvider>
    </Section>
  );
};

export default App;

