import React, { useState } from "react";
import styles from "../../styles/About/AboutNav.module.css";
import AboutMe from "./AboutMe";
import AboutSite from "./AboutSite";

export default function AboutNav() {
  const [about, setAbout] = useState("site");

  return (
    <div className={styles.container}>
      <div className={styles.menu_container}>
        <button
          onClick={() => setAbout("site")}
          className={about === "site" ? styles.active : styles.inactive}
        >
          About the Site
        </button>
        <button
          onClick={() => setAbout("me")}
          className={about === "me" ? styles.active : styles.inactive}
        >
          About Me
        </button>
      </div>

      <div className={styles.about_container}>
        {about === "site" ? <AboutSite /> : <AboutMe />}
      </div>
    </div>
  );
}
