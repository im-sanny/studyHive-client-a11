/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../lottie.json";

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
    <Navigate to={"/login"} state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoutes;
