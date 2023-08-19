import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const navigateToHome = () =>{
        navigate("/home");
    }
  return (
    <div className="mainn">
      <div className="container1" id="container1">
        <div className="form-container sign-in-container">
          <form className="formmm" action="#">
            <h1>Sign in</h1>
            <input required className="inputt" type="email" placeholder="Email" />
            <input required className="inputt" type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button onClick={navigateToHome}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={navigateToHome} className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
