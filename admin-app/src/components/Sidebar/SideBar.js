import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";

const SideBar = ({ changeRouter }) => {
  const [sidebar, setSidebar] = useState(true);

  const showSideBar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSideBar} />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    {sidebar ? <span>{item.title}</span> : <span></span>}
                  </Link>
                </li>
              );
            })}
            <li
              className="nav-text"
              style={{ marginLeft: "15px", color: "#fff", cursor: "pointer" }}
              onClick={changeRouter}
            >
              <RiIcons.RiLogoutBoxFill />
              {sidebar ? <span>Log Out</span> : <span></span>}
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
