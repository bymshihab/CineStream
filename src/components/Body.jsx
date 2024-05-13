import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
        path: "/browser",
        element: <Browse></Browse>
    }
  ]);

  return (
    <div>
      {/* <Login></Login>
      <Browse></Browse> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Body;
