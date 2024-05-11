import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Home from "../pages/Home";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from "../pages/Assignments";
import AssignmentDetails from "../pages/subpages/AssignmentDetails";

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
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/asnmnts`),
      },
      {
        path:'/assignmentDetails/:id',
        element:<AssignmentDetails></AssignmentDetails>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/asnmnts`)
      }
    ],
  },
]);

export default router;
