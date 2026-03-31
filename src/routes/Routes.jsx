import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AllSubmittedAsn from '../pages/AllSubmittedAsn';
import AssignmentDetails from '../pages/AssignmentDetails';
import Assignments from '../pages/Assignments';
import Login from '../pages/Authentication/Login';
import Registration from '../pages/Authentication/Registration';
import CreateAssignment from '../pages/CreateAssignment';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import MySubmittedAsn from '../pages/MySubmittedAsn';
import PendingAssignment from '../pages/PendingAssignment';
import UpdateAssignment from '../pages/UpdateAssignment';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/createAssignment',
        element: (
          <PrivateRoutes>
            <CreateAssignment></CreateAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/asnmnts`),
      },
      {
        path: '/assignmentDetails/:id',
        element: (
          <PrivateRoutes>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/asnmnt/${params.id}`, {
            credentials: 'include',
          }),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoutes>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/asnmnt/${params.id}`, {
            credentials: 'include',
          }),
      },
      {
        path: '/mySubmit',
        element: (
          <PrivateRoutes>
            <MySubmittedAsn></MySubmittedAsn>
          </PrivateRoutes>
        ),
      },
      {
        path: '/pendingAssignment',
        element: (
          <PrivateRoutes>
            <PendingAssignment></PendingAssignment>
          </PrivateRoutes>
        ),
      },
      {
        path: '/allSubmittedAsn',
        element: (
          <PrivateRoutes>
            <AllSubmittedAsn></AllSubmittedAsn>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
