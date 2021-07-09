import React from "react";
import "./HomeComponent.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

const HomeComponent = () => {
  return (
    <IconContext.Provider value={{ size: "7em", color: "#000000" }}>
      <div className="gridContainer">
        <Link to="/hospitals" className="gridItem">
          <FaIcons.FaHospital />
          <h3>Total Hospitals Approved</h3>
          <h1>250</h1>
        </Link>
        <Link to="/hospitals" className="gridItem">
          <RiIcons.RiQuestionnaireFill />
          <h3>Pending Hospitals Approval Requests</h3>
          <h1>250</h1>
        </Link>
        <Link to="/distributors" className="gridItem">
          <FaIcons.FaShoppingCart />
          <h3>Total Distributors Approved</h3>
          <h1>250</h1>
        </Link>
        <Link to="/distributors" className="gridItem">
          <RiIcons.RiQuestionnaireFill />
          <h3>Pending Distributors Approval Requests</h3>
          <h1>250</h1>
        </Link>
      </div>
    </IconContext.Provider>
  );
};

export default HomeComponent;
