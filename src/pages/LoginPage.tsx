import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="container col-md-4 h-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-light mb-3 text-left w-100">Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
