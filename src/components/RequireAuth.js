import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/userSlice";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // if user not logged in, then redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/loginform" />;
  }

  return children;
}

export default RequireAuth;
