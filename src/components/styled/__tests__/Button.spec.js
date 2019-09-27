import React from "react";
import renderer from "react-test-renderer";
import { tupleNestedArray, flattenNestObj } from "../../utils";
import "jest-styled-components";

import { Button } from "../Index";

const DefaultProps = tupleNestedArray( flattenNestObj(Button.defaultProps) );

test("Button renders correctly.", () => {
  const element = renderer.create(<Button />).toJSON();
  expect(element).toMatchSnapshot();
});

DefaultProps.forEach(prop => {
  test(`Default props: ${prop[0]} should be ${prop[1]}`, () => {
    const element = renderer.create(<Button />).toJSON();
    expect(element).toHaveStyleRule(prop[0], prop[1]);
  });
});