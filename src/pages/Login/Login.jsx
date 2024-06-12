import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase"

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState("false");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  const user_auth = async (event) => {
    event.preventDefault();
    if (signState=== "Sign in") {
      await Login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  return (
    <>
      <div className="main">
        <div>
          <img src={logo} className="login-logo" alt="" />
        </div>
        <div className="login-form">
          <h1 className="sign">{signState}</h1>
          <form>
            {signState==="Sign Up" ? (
              <input
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                type="text"
                placeholder="Your name"
              />
            ) : (
              <></>
            )}
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
            />
            <input type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              
              placeholder="Password"
            />
          <button type="button" onClick={togglePasswordVisibility} className="password-toggle" >
          <i className={passwordVisible ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
          </button>

            <button onClick={user_auth} type="submit" className="btn">
              {signState}
            </button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox"></input>
                <label htmlFor="">Remember Me</label>
              </div>
              <div className="help">
                <p>Need Help ?</p>
              </div>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?{" "}
                <span
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

