import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, classname, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-purple-500 bg-gray-800 btn btn-ghost" : `${classname} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
