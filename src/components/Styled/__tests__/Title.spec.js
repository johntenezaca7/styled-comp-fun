import React from "react";
import renderer from "react-test-renderer";
import 'jest-styled-components';

import { Title } from "../Index";

// const DEFAULT_Values = 

test("Button renders correctly.", () => {
  const element = renderer.create(<Title />).toJSON();
  expect(element).toMatchSnapshot();
});

