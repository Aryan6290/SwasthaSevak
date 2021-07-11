import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import Distributor from "./pages/Distributor";
// import PendingRequests from "./pages/PendingRequests";
import Login from "./components/LoginSection/Login";
// import Detail from "./components/Details/Detail";
import swal from "sweetalert";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const changeRouter = () => {
    fetch("https://swastha-sevak-backend.herokuapp.com/api/user/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status) {
          setIsLoggedIn(!isLoggedIn);
          setToken(response.data);
        } else {
          swal("Try Again", "Fill correct Admin Id and Password", "warning");
        }
      });
  };
  const PasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", flexWrap: "flex-wrap" }}>
        {isLoggedIn ? (
          <Router>
            <SideBar changeRouter={changeRouter} />

            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route
                path="/hospitals"
                component={() => <Hospitals token={token} />}
              />
              <Route
                path="/distributors"
                component={() => <Distributor token={token} />}
              />
            </Switch>
          </Router>
        ) : (
          <Login changeRouter={changeRouter} PasswordChange={PasswordChange} />
        )}
      </div>
    </>
  );
};

export default App;
