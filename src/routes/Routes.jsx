import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Home from "../pages/Home";
import CreateAssignment from "../pages/CreateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/createAssignment',
        element:<CreateAssignment></CreateAssignment>,
      }
    ]
    
  },
]);

export default router;
