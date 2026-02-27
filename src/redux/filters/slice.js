import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    nameFilter: "",
  },
  reducers: {
    setFilter(state, action) {
      state.nameFilter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
