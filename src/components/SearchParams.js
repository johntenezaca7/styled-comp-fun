import React from "react";
import { Button, DivWrapper  } from "./styled/Index";

const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <DivWrapper>
      <form>
        <label htmlFor="location">
          Location:
          <input id="location" defaultValue={location} placeholder="Location"/>
        </label>
        <Button>Submit</Button>
      </form>
    </DivWrapper>
  )
};

export default SearchParams;