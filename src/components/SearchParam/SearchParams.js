import React from "react";
import { Button, FlexContainer } from "../Styled";

const SearchParams = () => {
  const location = "Seattle, WA";
  return (
    <form>
      <FlexContainer flow="column">
        <label htmlFor="location">
          Location:
          <input id="location" defaultValue={location} placeholder="Location"/>
        </label>
        <Button margin="1rem 0">Submit</Button>
      </FlexContainer>
    </form>
  );
};

export default SearchParams;