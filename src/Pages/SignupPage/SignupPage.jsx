import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignupPage() {
  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState("");
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });
  const setUserData = (name) => {
    return ({ target: { value } }) => {
      setSignUpData((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    sendSignUpData(signUpData);
  };

  async function sendSignUpData(data) {
    try {
      const response = await axios.post("/api/auth/signup", data);
      if (response.status === 201) {
        const { data } = response;
        const userToken = data.encodedToken;
        localStorage.setItem("userToken", userToken);
        navigate("/product");
      }
    } catch (error) {
      setSignUpError("An error occurred.");
      console.log(error);
    }
  }

  return (
    <main className="signup-wrapper">
      <section className="login-page-bottom-container">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div>
              <label className="input-label">Email address</label>
              <input
                className="form-input-container"
                type="text"
                required
                placeholder="xyz@gmail.com"
                value={signUpData.email}
                onChange={setUserData("email")}
              />
            </div>
            <div>
              <label className="input-label">Password</label>
              <input
                className="form-input-container"
                type="text"
                required
                placeholder="**********"
                value={signUpData.password}
                onChange={setUserData("password")}
              />
            </div>
            <div className="form-bottom-section">
              <input type="checkbox" className="checkbox" />
              <span>I accept all Terms and Conditions</span>
            </div>
            <button className="button-login-form border-style" type="submit">
              CREATE NEW ACCOUNT
            </button>
            <Link to="/login">
              Already have an account <i className="fas fa-chevron-right"></i>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
