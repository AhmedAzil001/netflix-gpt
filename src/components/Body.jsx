import React from 'react';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from './LogIn';
import Header from './Header';
import Browse from './Browse';

const appRoute = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
  ])

const Body = () => {
  return (
    <RouterProvider router={appRoute}/>
  );
}

export default Body;
