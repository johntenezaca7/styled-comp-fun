import React from "react";
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button } from "../Index";

test("Button renders correctly.", () => {
  const element = renderer.create(<Button />).toJSON();
  expect(element).toMatchSnapshot();
});