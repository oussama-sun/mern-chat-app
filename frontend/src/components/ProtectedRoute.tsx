import React from "react";
import { Route, Navigate } from "react-router-dom";
interface props {
  path: string;
  element: React.ReactNode;
  isLoggedIn: boolean; // Pass the state whether the user is logged in or not
}

const ProtectedRoute = ({
  path,
  element,
  isLoggedIn,
}: props): React.ReactElement | null => {
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Route path={path} element={<Navigate to="/login" />} />
  );
};

export default ProtectedRoute;
