import React from "react";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="container col-md-4 h-100 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-light mb-3 text-left w-100">Sign Up</h2>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
