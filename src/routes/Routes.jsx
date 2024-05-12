import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Home from "../pages/Home";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from "../pages/Assignments";
import AssignmentDetails from "../pages/subpages/AssignmentDetails";
import UpdateAssignment from "../pages/UpdateAssignment";
import PrivateRoutes from "./PrivateRoutes";
import MySubmittedAsn from "../pages/MySubmittedAsn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/createAssignment",
        element: (
          <PrivateRoutes>
            <CreateAssignment></CreateAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/asnmnts`),
      },
      {
        path: "/assignmentDetails/:id",
        element: (
          <PrivateRoutes>
            <AssignmentDetails></AssignmentDetails>,
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/asnmnt/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/asnmnt/${params.id}`),
      },
      {
        path: "/mySubmit",
        element: (
          <PrivateRoutes>
            <MySubmittedAsn></MySubmittedAsn>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
