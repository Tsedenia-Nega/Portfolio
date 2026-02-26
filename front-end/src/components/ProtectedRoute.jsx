import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If no token, redirect to your specific login path
  if (!token) {
    return <Navigate to="/myport_login" replace />;
  }

  // If token exists, render the AdminDashboard
  return children;
};

export default ProtectedRoute;
