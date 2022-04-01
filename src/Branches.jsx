import React from "react";
import { NavLink } from "react-router-dom";
import Logger from "./Logger";

export default function Branches({ recordsUpdated }) {
  function styling(isActive) {
    return { color: isActive ? "green" : "blue" };
  }

  return (
    <>
      <h1>Menu</h1>
      <h2>
        <NavLink to="/" style={({ isActive }) => styling(isActive)}>
          This Week
        </NavLink>
      </h2>
      <h2>
        <NavLink to="/logs" style={({ isActive }) => styling(isActive)}>
          Archives
        </NavLink>
      </h2>
      <h2>
        <NavLink to="/boards" style={({ isActive }) => styling(isActive)}>
          Categories
        </NavLink>
      </h2>
      <div className="logger">
        <Logger recordsUpdated={recordsUpdated} />
      </div>
    </>
  );
}
