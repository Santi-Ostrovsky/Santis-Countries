import React from "react";
import { NavLink } from "react-router-dom";

export default function AboutNav() {
  return (
    <div>
      <NavLink to="/about/site">
        <button>About the Site</button>
      </NavLink>
      <NavLink to="/about/me">
        <button>About Me</button>
      </NavLink>
    </div>
  );
}
