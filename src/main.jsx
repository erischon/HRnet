import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error-page.jsx";
import CreateEmployee from "./pages/CreateEmployee-page.jsx";
import Employee from "./pages/Employee-page.jsx";

import "./index.css";
import React from "react";
import App from "./App.jsx";
import Root from "./components/layout/Root.jsx";

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
        element: <App />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
