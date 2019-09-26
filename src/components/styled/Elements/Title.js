import styled from "styled-components";

export const Title = styled.h1`
  color: ${ props => props.theme.main };
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 12px;
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Title.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}
