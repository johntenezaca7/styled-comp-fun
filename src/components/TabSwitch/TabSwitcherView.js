import React from "react";

import TabSwitcher from "./TabSwitcher";
import Pet from "../Pet/Pet";
import { Tab, TabPanel } from "./TabSwitcherContext";
import { Button, FlexContainer } from "../Styled";

const TabSwitcherView = (props) => {
  const { items } = props.data;
  return (
    <>
      <TabSwitcher>
        <FlexContainer width="25%" jContent="space-between" margin="2rem 0" padding="0">
          { 
            items !== null ? 
              items.map(item => {
                const { id } = item;
                return (
                  <Tab id={ id } key={ id }>
                    <Button>{ id.toLocaleUpperCase() }</Button>
                  </Tab>
                );
              }) : null
          }
        </FlexContainer>
        <>
          {
            items !== null ?
              items.map(item => {
                const { id, details: { name, breed, animal } } = item;
                return (
                  <TabPanel whenActive={ id } key={ id }>
                    <Pet
                      name={ name }
                      animal={ animal }
                      breed={ breed } 
                    />
                  </TabPanel>
                );
              }) : null
          }
        </>
      </TabSwitcher>
    </>
  );
}

export { TabSwitcherView as default };
