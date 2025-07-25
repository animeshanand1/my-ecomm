import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { fetchUserProfile } from "../features/user/userSlice";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token && !isAuthenticated) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, isAuthenticated]);

  const hasToken = localStorage.getItem("userToken");

  if (hasToken && isLoading) {
    return <div>Loading...</div>;

    if (!hasToken || (!isLoading && !isAuthenticated)) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
  }
};

export default ProtectedRoute;
