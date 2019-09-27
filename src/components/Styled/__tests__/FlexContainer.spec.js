import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { FlexContainer } from "../Elements/FlexContainer";

test("FlexContainer renders correctly", () => {
	const element = renderer.create(<FlexContainer />).toJSON();
	expect(element).toMatchSnapshot();
});

test("Default props are passed", () => {

});