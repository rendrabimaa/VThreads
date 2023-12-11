import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { asyncPreloadProcess } from '../../store/isPreload/action';

function ProtectedRoute() {
  const authUser = useSelector((states) => states.authUser);

  return authUser ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default ProtectedRoute;
