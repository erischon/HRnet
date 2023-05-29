import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CreateEmployee from "./pages/CreateEmployee-page.jsx";
import Employee from "./pages/Employee-page.jsx";

import "./index.css";
import React from "react";

/**
 * @description The router of the application.
 */
const router = createBrowserRouter([
  {
    path: "/employee",
    element: <Employee />,
    children: [
      {
        path: "create",
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
