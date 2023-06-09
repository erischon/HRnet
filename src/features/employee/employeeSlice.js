import { createSlice } from "@reduxjs/toolkit";
import { employeesData } from "../../data/employees";

const initialState = {
  employeeList: employeesData,
  isLoading: true,
};

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
