import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Input } from "../Elements/Input";

test("Input renders correctly.", () => {
  const element = renderer.create(<Input/>).toJSON();
  expect(element).toMatchSnapshot();
});

test("Default props are passed", () => {

});
