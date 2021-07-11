import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as BiIcons from "react-icons/bs";

export const SideBarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Hospitals",
    path: "/hospitals",
    icon: <FaIcons.FaRegHospital />,
    className: "nav-text",
  },
  {
    title: "Distributors",
    path: "/distributors",
    icon: <AiIcons.AiOutlineShoppingCart />,
    className: "nav-text",
  },
  // {
  //   title: "Log Out",
  //   path: "/",
  //   icon: <RiIcons.RiLogoutBoxFill />,
  //   className: "nav-text",
  // },
];
