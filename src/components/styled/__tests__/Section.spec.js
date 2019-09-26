import React from "react";
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Section } from "../Index";

test("Section component renders correctly.", function() {
  const element = renderer.create(<Section />).toJSON();
  expect(element).toMatchSnapshot();
});