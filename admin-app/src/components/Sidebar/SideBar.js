import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";

const SideBar = () => {
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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
