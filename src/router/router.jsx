import { createBrowserRouter } from "react-router-dom"
import root from "../layout/root";
import { Component } from "react";
import Home from "../pages/Home/home";
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: root,
        children: [
            {
                path: "/",
                Component: Home
            }
        ],
    },
]);