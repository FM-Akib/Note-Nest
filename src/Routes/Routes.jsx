import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Landing from "../Pages/Landing/Landing";
import ResourceLayout from "../Layout/ResourceLayout";
import CseHome from "../Pages/Cse/CseHome";
import CseContent from "../Pages/Cse/CseContent";
import SignIn from "../Pages/Sign/SignIn";
import SignUp from "../Pages/Sign/SignUp";
import DashbordLayout from "../Layout/DashbordLayout";
import UserHome from "../Pages/Dashboard/UserHome";
import Contribute from "../Pages/Cse/Contribute";
import MyContribution from "../Pages/Dashboard/MyContribution";
import Bookmarked from "../Pages/Dashboard/Bookmarked";
import Clubs from "../Pages/Clubs/Clubs";
import EditMyContribution from "../Pages/Dashboard/EditMyContribution";
import Projects from "../Pages/Projects/Projects";
import Myprojects from "../Pages/Dashboard/Myprojects";
import Sellcomponents from "../Pages/Dashboard/Sellcomponents";
import ErrorPage from "../Pages/Error/ErrorPage";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Landing></Landing>
        },
        {
          path: "/login",
          element: <SignIn></SignIn>
        },
        {
        path: "/signup",
        element: <SignUp></SignUp>
       },
       {
        path: "/clubs",
        element: <Clubs></Clubs>
       },
       {
        path: "/projects",
        element: <Projects></Projects>
       },
       {
        path: "*",
        element: <ErrorPage/>
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
        },
        {
          path: "content/:id",
          element: <CseContent></CseContent>
        },
        {
          path: "contribute",
          element: <Contribute></Contribute>
        },
        {
         path: "*",
         element: <ErrorPage/>
        }
      ]
    },
    {
      path: "dashboard",
      element: <DashbordLayout></DashbordLayout>,
      children: [
        {
          path: "home",
          element: <UserHome></UserHome>
        },
        {
          path: "myContribution",
          element: <MyContribution></MyContribution>
        },
        {
          path: "bookmarked",
          element: <Bookmarked></Bookmarked>
        },
        {
          path: "myprojects",
          element: <Myprojects></Myprojects>
        },
        {
          path: "sellprojects",
          element: <Sellcomponents></Sellcomponents>
        },
        {
          path: "editContribution/:id",
          element: <EditMyContribution></EditMyContribution>
        },
        {
         path: "*",
         element: <ErrorPage/>
        }
  
      ]
    }
  ]);