import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>SiteNav</h1>
      <Link to="/">
        <button>LANDING</button>
      </Link>
      <Link to="/countries">
        <button>COUNTRIES</button>
      </Link>
      <Link to="/activities">
        <button>ACTIVITIES</button>
      </Link>
      <Link to="/about">
        <button>ABOUT</button>
      </Link>
    </div>
  );
}
