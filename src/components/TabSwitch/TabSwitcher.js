import React, { Component } from "react";
import { Provider } from "./TabSwitcherContext";

export default class TabSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: "a"
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTabId) {
    this.setState({
      activeTabId: newTabId
    });
  }

  render() {
    return (
      <Provider
        value={{
          activeTabId: this.state.activeTabId,
          changeTab: this.changeTab
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
};
