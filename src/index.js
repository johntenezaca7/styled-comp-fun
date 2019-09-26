import React from "react";
import { render } from "react-dom";

import  App  from "./components/App";

class Init extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}


render( <Init/> , document.getElementById("root"));