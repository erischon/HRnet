import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { store } from "./app/store";
import HomePage from "./pages/Home-page.jsx";
import ErrorPage from "./pages/Error-page.jsx";
import CreateEmployee from "./pages/CreateEmployee-page.jsx";
import Employee from "./pages/Employee-page.jsx";
import Root from "./components/layout/Root.jsx";

import "./index.css";

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "employee/",
        element: <Employee />,
      },
      {
        path: "employee/create",
        element: <CreateEmployee />,
      },
    ],
  },
]);

// Create a persistor
const persistor = persistStore(store);

// The entry point of the application.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
