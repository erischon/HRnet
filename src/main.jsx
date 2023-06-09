import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store";
import HomePage from "./pages/Home-page.jsx";
import ErrorPage from "./pages/Error-page.jsx";
import CreateEmployee from "./pages/CreateEmployee-page.jsx";
import Employee from "./pages/Employee-page.jsx";
import Root from "./components/layout/Root.jsx";

import "./index.css";

/**
 * @description The router of the application.
 */
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

/**
 * @description The entry point of the application.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
