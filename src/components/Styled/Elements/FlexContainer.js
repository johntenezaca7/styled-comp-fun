import styled from "styled-components";

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: ${props => props.flow };
	width: ${props => props.width };
	justify-content: ${props => props.jContent };
	align-items: ${props => props.aItems }};
	margin: ${props => props.margin };
	padding: ${props => props.padding };
`;

FlexContainer.defaultProps = {
	flow: "row",
	width: "100%",
	jContent: "flex-start",
	aItems: "flex-start",
	margin: "0",
	padding: "0"
};

