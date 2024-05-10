import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Landing from "../Pages/Landing/Landing";
import ResourceLayout from "../Layout/ResourceLayout";
import CseHome from "../Pages/Cse/CseHome";

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
    {
      path: "resources",
      element: <ResourceLayout></ResourceLayout>,
      children:[
        {
            path: "cse",
            element: <CseHome></CseHome>
        }
      ]
    }
  ]);