import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import Lottie from "react-lottie";
// import groovyWalkAnimation from "../lottie.json";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center items-center">
        Loading....
        {/* <Lottie
          animationData={groovyWalkAnimation}
          options={{
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          className="h-32 mt-8"
        /> */}
      </div>
    );

  if (user) return children;

  return (
    <Navigate to={"/login"} state={location.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoutes;
