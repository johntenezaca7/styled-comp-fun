import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { GlobalStyles } from "../Elements/GlobalStyles";

test("GlobalStyles renders correctly.", () => {
  const element = renderer.create(<GlobalStyles />).toJSON();
  expect(element).toMatchSnapshot();
});

test("Default props are passed", () => {

});