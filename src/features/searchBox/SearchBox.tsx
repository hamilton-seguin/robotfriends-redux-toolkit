import React from "react";
import { useAppDispatch } from "../../services/hook";
import { searchFieldChange } from "./searchBoxSlice";

const SearchBox = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="Search robots..."
        aria-label="Search robots"
        onChange={(event) => dispatch(searchFieldChange(event.target.value))}
      />
    </div>
  );
};
export default SearchBox;
