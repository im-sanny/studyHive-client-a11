/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg mt-[10%]"></span>
      </div>
    );

  if (user) return children;

  return (
    <Navigate to={"/login"} state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoutes;
