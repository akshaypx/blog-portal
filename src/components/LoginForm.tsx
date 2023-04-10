import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

const LoginForm = () => {
  const loginUser = useUserStore((state) => state.loginUser);
  const User = useUserStore((state) => state.User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    loginUser(email, password).then(() => navigate("/"));
  };
  return (
    <form className="text-light w-100">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e: any) => setEmail(e.target.value)}
          type="email"
          className="form-control bg-dark text-light"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          Example: abc@abc.xyz
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(e: any) => setPassword(e.target.value)}
          type="password"
          className="form-control bg-dark text-light"
          id="exampleInputPassword1"
        />
        <div id="emailHelp" className="form-text">
          Must be more than 6 characters.
        </div>
      </div>
      <button onClick={handleLogin} type="submit" className="btn btn-dark">
        Submit
      </button>
      <div className="my-3 w-100">
        <p>
          New here ?{" "}
          <Link to="/signup" className="text-light">
            Signup
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
