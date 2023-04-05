import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useVerified from "../hooks/useVerified";
import { toast } from "react-hot-toast";

const VerifiedUserRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isVerified, isVerifiedLoading] = useVerified(user?.email);
  const location = useLocation();

  if (loading || isVerifiedLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isVerified) {
    return children;
  } else {
    toast.error(
      "You are not verified by admin. Please wait for verification..."
    );
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default VerifiedUserRouter;
