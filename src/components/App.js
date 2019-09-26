import React from "react";
import { ThemeProvider } from "styled-components";

import TabSwitcherView from "./TabSwitch/TabSwitcherView";
import Search from "./SearchParam/SearchParams";
import { GlobalStyles, Section, PrimaryTheme , Title } from "./Styled";

const App = (props) => {
  const items = props;
  return (
    <Section>
      <GlobalStyles />
      <ThemeProvider theme={ PrimaryTheme }>
        <Title id="something-important">Tab Switcher</Title>
        <Search />
        <TabSwitcherView data={ items }/>
      </ThemeProvider>
    </Section>
  );
};

export default App;

