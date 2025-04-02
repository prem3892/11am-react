import React from "react";
import Dashboard from "../../pages/Dashboard";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Protect() {
  const { authenticated } = useSelector((state) => state.authSlice);

  if (authenticated === null) return <Navigate to="/login" />;
  return (
    <div>
      <Dashboard />
    </div>
  );
}
export default Protect;
