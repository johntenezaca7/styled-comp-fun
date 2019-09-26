import React from "react";
import { render } from "react-dom";

import App from "../components/App";
import dummyState from "../components/utils/appDummyState";

class Init extends React.Component {
  render() {
    console.log("dummy state", dummyState )
    return (
      <div>
        <App items={ dummyState.items } />
      </div>
    );
  }
};

const root = document.getElementById("root");

render( <Init /> , root);