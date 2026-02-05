import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import Apps from "../Pages/Apps/Apps.jsx";
import AppDetails from "../Pages/AppDetails/AppDetails.jsx";
import Installation from "../Pages/Installation/Installation.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        path: '/',
        loader:()=>fetch('/appsData.json'),
        Component: Home,
      },
      { 
        path: '/apps',
        loader:()=>fetch('/appsData.json'),
        Component: Apps,
      },
      { 
        path: '/appdetails/:idd',
        loader:()=>fetch('/appsData.json'),
        Component: AppDetails,
      },
      { 
        path: '/installation',
        loader:()=>fetch('/appsData.json'),
        Component: Installation,
      },
    ],
  },
]);
