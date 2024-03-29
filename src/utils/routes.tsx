import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorElement from "../views/ErrorElement/ErrorElement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorElement/>
    }
]);