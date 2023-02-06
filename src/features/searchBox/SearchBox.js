import React from "react";
import { useDispatch } from "react-redux";
import { searchFieldChange } from "./searchBoxSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

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
