import React from "react";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import Distributor from "./pages/Distributor";
import PendingRequests from "./pages/PendingRequests";
const App = () => {
  return (
    <>
      <Router>
        <div style={{ display: "flex", flexWrap: "flex-wrap" }}>
          <SideBar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/hospitals" exact component={Hospitals} />
            <Route path="/distributors" component={Distributor} />
            <Route path="/requests" component={PendingRequests} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
