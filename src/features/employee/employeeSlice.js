import { createSlice } from "@reduxjs/toolkit";
import { employeesData } from "../../data/employees";

const initialState = {
  employeeList: employeesData,
  isLoading: true,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
});

export default employeeSlice.reducer;
