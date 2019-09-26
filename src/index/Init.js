import React from "react";
import App from "../components/App";
import dummyState from "../components/utils/appDummyState";

const Init = () => (<> <App items={ dummyState.items } /> </>);

export { Init as default };