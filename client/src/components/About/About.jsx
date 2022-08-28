import React from "react";
import SiteNav from "../SiteNav";
import AboutSite from "./AboutSite";
import AboutMe from "./AboutMe";

export default function About() {
  return (
    <>
      <SiteNav />
      <div>
        <AboutSite />
        <AboutMe />
      </div>
    </>
  );
}
