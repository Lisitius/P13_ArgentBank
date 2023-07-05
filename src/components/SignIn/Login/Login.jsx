import "../../../sass/components/_login.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => navigate("/user"))
      .catch((err) => console.error(err));
  };

  return (
    <section className="signIn">
      <i className="fa fa-user-circle signIn__icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="signIn__wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signIn__wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signIn__remember">
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" id="remember-me" />
        </div>
        <button className="signIn__button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Login;
