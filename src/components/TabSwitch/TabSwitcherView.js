import React from "react";

import TabSwitcher from "./TabSwitcher";
import { Tab, TabPanel } from "./TabSwitcherContext";
import Pet from "../Pet/Pet";
import { Button } from "../Styled";

const TabSwitcherView = (props) => {
  const { items } = props.data;
  return (
    <>
      <TabSwitcher>
        <>
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
        </>
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
