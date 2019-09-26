import React, { createContext } from "react";

const context = createContext({
  activeTabId: "",
  changeTab: () => {}
});

const { Provider, Consumer } = context;

const Tab = ({ id, children }) => (
  <Consumer>
    {({ changeTab }) => <div onClick={ () => changeTab(id) }> {children} </div>}
  </Consumer>
);

const TabPanel = ({ whenActive, children}) => (
  <Consumer>
    { ({ activeTabId }) => ( activeTabId === whenActive ? children : null )}
  </Consumer>
);

export { Tab, TabPanel, Provider };
