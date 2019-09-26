import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  border-radius: 3px;
  cursor: pointer;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  padding: ${props => props.padding };
  margin: ${props => props.margin };
`;

Button.defaultProps = {
  padding: "0.25em 1em",
  margin: "0",
  theme: {
    main: "#70A288"
  },
};

