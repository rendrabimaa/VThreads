import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const authUser = useSelector((states) => states.authUser);

  return authUser ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default ProtectedRoute;
