/* eslint-disable react/prop-types */
import Lottie from 'lottie-react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import groovyWalkAnimation from '../lottie.json';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center -mt-20">
        <Lottie animationData={groovyWalkAnimation} />
      </div>
    );

  if (user) return children;

  return (
    <Navigate to={'/login'} state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoutes;
