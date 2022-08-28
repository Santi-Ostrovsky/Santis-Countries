import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>Santi's Countries</h1>
      <NavLink to="/">
        <button>LANDING</button>
      </NavLink>
      <NavLink to="/countries">
        <button>COUNTRIES</button>
      </NavLink>
      {/* <NavLink to="/activities">
        <button>ACTIVITIES</button>
      </NavLink> */}
      <NavLink to="/activities/create">
        <button>CREATE ACTIVITY</button>
      </NavLink>
      <NavLink to="/about">
        <button>ABOUT</button>
      </NavLink>
    </div>
  );
}
