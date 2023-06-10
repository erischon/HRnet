import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import employeeReducer from "../features/employee/employeeSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const reducers = combineReducers({
  employee: employeeReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * @description Store configuration
 */
export const store = configureStore({
  reducer: persistedReducer,
});
