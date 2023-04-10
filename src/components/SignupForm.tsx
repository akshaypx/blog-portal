import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

const SignupForm = () => {
  const signupUser = useUserStore((state) => state.signupUser);
  const User = useUserStore((state) => state.User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    await signupUser(email, password, name, "user").then(() => navigate("/"));
    console.log(User);
  };
  return (
    <form className="text-light w-100">
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          onChange={(e: any) => setName(e.target.value)}
          type="name"
          className="form-control bg-dark text-light"
          id="exampleInputName1"
          aria-describedby="nameHelp"
        />
        <div id="nameHelp" className="form-text">
          John Doe
        </div>
      </div>
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
      <button onClick={handleSignup} type="submit" className="btn btn-dark">
        Submit
      </button>
      <div className="my-3 w-100">
        <p>
          Already user ?{" "}
          <Link to="/login" className="text-light">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
