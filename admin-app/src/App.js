import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import Distributor from "./pages/Distributor";
import PendingRequests from "./pages/PendingRequests";
import Login from "./components/LoginSection/Login";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeRouter = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      {/* <Router> */}
      <div style={{ display: "flex", flexWrap: "flex-wrap" }}>
        {isLoggedIn ? (
          <Router>
            <SideBar />

            <Switch>
              {/* <Route
              path="/"
              exact
              component={() => <Login changeRouter={changeRouter} />}
            /> */}
              <Route path="/" exact component={Dashboard} />
              <Route path="/hospitals" component={Hospitals} />
              <Route path="/distributors" component={Distributor} />
              <Route path="/requests" component={PendingRequests} />
            </Switch>
          </Router>
        ) : (
          <Login changeRouter={changeRouter} />
        )}
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
