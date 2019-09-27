import styled from "styled-components";

export const Input = styled.input`
	border: ${props => props.theme.color } 1px solid;
	height: 2rem;
`;

Input.defaultProps = {
	theme: {
		color: "palevioletred"
	}
};