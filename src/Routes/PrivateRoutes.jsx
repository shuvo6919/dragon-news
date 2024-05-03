import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoutes;
