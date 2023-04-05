import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  toast.error("Please Login to view contents...");
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
