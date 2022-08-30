import React from "react";
import SiteNav from "../SiteNav";
import AboutNav from "./AboutNav";
import styles from "../../styles/About/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <SiteNav />
      <AboutNav />
    </div>
  );
}
