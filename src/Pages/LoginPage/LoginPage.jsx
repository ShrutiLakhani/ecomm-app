import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
export function LoginPage() {
  return (
      <main className="signup-wrapper">
      <section className="login-page-bottom-container">
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <div>
            <label className="input-label">Email address</label>
            <input className="form-input-container" type="text" placeholder="xyz@gmail.com"></input>
          </div>
          <div>
            <label className="input-label">Password</label>
            <input className="form-input-container" type="text" placeholder="**********"></input>
          </div>
          <div className="forgot-pswrd-link">  
            <a href="#">Forgot Password?</a>
          </div>
          <p><input className="style-input-checkbox" type="checkbox" /> Remember me</p>
         
          <a href="#" className="button-login-form border-style">Login</a>
          <a className="btn-sign-up button-link" href="#">Create New Account <i class="fas fa-chevron-right"></i></a>
        </form>
      </div>
    </section>
    </main>
  );
}