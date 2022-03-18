import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

export function SignupPage() {
  return (
    <main className="signup-wrapper">
     <section className="login-page-bottom-container">
      <div className="login-container">
        <form className="login-form">
          <h1>Signup</h1>
          <div>
            <label className="input-label">Email address</label>
            <input className="form-input-container" type="text" placeholder="xyz@gmail.com"></input>
          </div>
          <div>
            <label className="input-label">Password</label>
            <input className="form-input-container" type="text" placeholder="**********"></input>
          </div>
          <div className="form-bottom-section">
            <input type="checkbox" className="checkbox" /><span>I accept all Terms and Conditions</span>
          </div>
          <Link to="#" className="button-signup-form border-style">Create New Account
          </Link>
          <Link to="/login">Already have an account <i
              className="fas fa-chevron-right"></i>
          </Link>    
        </form>
       </div>
      </section>
    </main>
  );
}