import React from "react";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "./Login.css";

const Login = ({ changeRouter, PasswordChange }) => {
  return (
    <IconContext.Provider value={{ size: "7em", color: "#fff" }}>
      <div className="loginContainer">
        <h1 style={{ margin: "20px" }}>Swasth Sewak Admin Section</h1>
        <div className="form">
          <div className="imgContainer">
            <RiIcons.RiAdminFill />
          </div>

          <label htmlFor="uname"></label>
          <input
            type="text"
            placeholder="Enter Admin Id"
            name="uname"
            required
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Enter Admin Password"
            name="password"
            onChange={PasswordChange}
            required
          />

          <button type="submit" className="loginButton" onClick={changeRouter}>
            Login
          </button>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Login;
