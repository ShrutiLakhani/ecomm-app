import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

export function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const testUser = {
    email: "theMarauders@gmail.com",
    password: "FortunaMajor",
  };

  function setUserData(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    submitLoginData(loginData);
  };

  const submitLoginData = async (loginData) => {
    try {
      const response = await axios.post("/api/auth/login", loginData);
      if (response.status === 200) {
        const userToken = response.data.encodedToken;
        localStorage.setItem("userToken", userToken);
        navigate("/products");
      }
    } catch (error) {
      setLoginError("An error occurred.");
      console.log("error:", error);
    }
  };

  const guestLogin = () => {
    submitLoginData(testUser);
  };

  return (
    <main className="signup-wrapper">
      <section className="login-page-bottom-container">
        <div className="login-container">
          <form className="login-form">
            <h1>Login</h1>
            <div>
              <label className="input-label">Email address</label>
              <input
                className="form-input-container"
                type="text"
                placeholder="xyz@gmail.com"
                onChange={setUserData}
              />
            </div>
            <div>
              <label className="input-label">Password</label>
              <input
                className="form-input-container"
                type="text"
                placeholder="**********"
                onChange={setUserData}
              />
            </div>
            <div className="forgot-pswrd-link">
              <a href="#">Forgot Password?</a>
            </div>
            <p>
              <input className="style-input-checkbox" type="checkbox" />{" "}
              Remember me
            </p>

            {/* <Link to="#" className="button-login-form border-style">
              Login
            </Link> */}
            <button className="button-login-form border-style">LOGIN</button>
            <button
              className="button-login-form border-style"
              onClick={() => guestLogin()}
            >
              Test User
            </button>
            <Link to="/signup" className="btn-sign-up button-link">
              Create New Account <i class="fas fa-chevron-right"></i>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
