import React from "react";
import { Outlet } from "react-router-dom";

function LoginView() {
  return (
    <>
      <div>LoginView</div>
      <Outlet></Outlet>
    </>
  );
}

export default LoginView;
