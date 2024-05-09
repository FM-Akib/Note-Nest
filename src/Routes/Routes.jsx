import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Landing from "../Pages/Landing/Landing";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Landing></Landing>
        }
      ]
    },
  ]);