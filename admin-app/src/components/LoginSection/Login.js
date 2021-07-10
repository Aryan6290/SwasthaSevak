import React from "react";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "./Login.css";

const Login = ({ changeRouter }) => {
  return (
    <IconContext.Provider value={{ size: "7em", color: "#fff" }}>
      <div className="loginContainer">
        <form action="/login" method="post">
          <div class="imgContainer">
            <RiIcons.RiAdminFill />
          </div>

          <label htmlFor="uname">{/* <b>Username</b> */}</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button type="submit" onClick={changeRouter}>
            Login
          </button>

          {/* <div class="container" style="background-color:#f1f1f1">
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div> */}
        </form>
      </div>
    </IconContext.Provider>
  );
};

export default Login;
