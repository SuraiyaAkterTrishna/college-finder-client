import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Admission from "../Pages/Admission/Admission/Admission";
import PlaceAdmission from "../Pages/Admission/PlaceAdmission/PlaceAdmission";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/colleges/:id",
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admission/:id",
        element: <PlaceAdmission></PlaceAdmission>,
      },
      {
        path: "/my-college",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
    ],
  },
]);

export default router;
