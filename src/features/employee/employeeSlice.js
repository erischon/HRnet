import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  employeeList: [],
  isLoading: true,
};

// Slice for employee
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
