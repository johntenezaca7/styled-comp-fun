import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  border-radius: 3px;
  cursor: pointer;
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  padding: ${props => props.padding };
  margin: ${props => props.margin };
`;

Button.defaultProps = {
  padding: "0.25rem 1rem",
  margin: "0",
  theme: {
    color: "#70A288"
  },
};

