import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/SiteNav.module.css";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      {/*  */}
      <NavLink to="/" activeclassname={styles.active}>
        <button className={styles.h1_button}>
          <h1>Santi's Countries</h1>
        </button>
      </NavLink>

      <div className={styles.nav_buttons}>
        <NavLink to="/countries" activeclassname={styles.active}>
          <button className={styles.nav_button}>HOME</button>
        </NavLink>

        {/* <NavLink to="/activities">
        <button>ACTIVITIES</button>
      </NavLink> */}

        <NavLink to="/activities/create" activeclassname={styles.active}>
          <button className={styles.nav_button}>CREATE ACTIVITY</button>
        </NavLink>

        <NavLink to="/about" activeclassname={styles.active}>
          <button className={styles.nav_button}>ABOUT</button>
        </NavLink>
      </div>
    </div>
  );
}
