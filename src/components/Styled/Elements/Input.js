import styled from "styled-components";

export const Input = styled.input`
	border: ${props => props.theme.main } 1px solid;
	height: 2rem;
`;

Input.defaultProps = {
	theme: {
		main: "palevioletred"
	}
};