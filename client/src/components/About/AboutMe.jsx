import React from "react";
import SiteNav from "../SiteNav";
import AboutNav from "./AboutNav";

export default function AboutMe() {
  return (
    <div>
      <div>
        <SiteNav />
        <AboutNav />
      </div>
      <h2>About Me</h2>
    </div>
  );
}
