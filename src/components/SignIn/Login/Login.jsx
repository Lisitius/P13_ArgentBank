import "../../../sass/components/_login.scss";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const rememberData = JSON.parse(localStorage.getItem("remember"));
    if (rememberData) {
      setEmail(rememberData.email);
      setRemember(rememberData.remember);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        if (remember) {
          localStorage.setItem("remember", JSON.stringify({ email, remember }));
        } else {
          localStorage.removeItem("remember");
        }
        navigate("/user");
      })
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
            value={email}
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
          <input
            type="checkbox"
            id="remember-me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        </div>
        <button className="signIn__button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Login;
