import React, { useState } from "react";
import { MailTwoTone, LockTwoTone, LoginOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import toast from "react-hot-toast";
import { loginUser } from "../apis/authApi";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    if (!validator.isEmail(email)) {
      toast.error("invalid Email");
    } else {
      try {
        const res = await loginUser(data);
        if (res.ok) {
          const { data } = await res.json();
          window.localStorage.setItem("token", data.token);
          window.sessionStorage.setItem("token", data.token);
          console.log(window.localStorage.getItem("token"));
          toast.success("Logged in user successfully");
          navigate("/");
        }
      } catch (err) {
        toast.error("Invalid credentials!");
      }
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>logo</h1>
        <div className="welcome-text">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login</p>
        </div>

        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MailTwoTone className="input-icon" />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockTwoTone className="input-icon" />
        </div>
        <button className="login-btn" type="submit">
          <LoginOutlined className="btn-icon" />
          <span>Login</span>
        </button>
        <div className="signup-link">
          {" "}
          <span>Don't have an account yet? </span>
          <Link to="/signup">Create Account</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
