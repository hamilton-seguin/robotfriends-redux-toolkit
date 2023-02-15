import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchField: "" };

export const searchSlice = createSlice({
  name: "searchRobots",
  initialState,
  reducers: {
    searchFieldChange: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { searchFieldChange } = searchSlice.actions;
export default searchSlice.reducer;
