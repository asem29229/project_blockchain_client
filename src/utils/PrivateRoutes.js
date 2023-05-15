import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext);

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
