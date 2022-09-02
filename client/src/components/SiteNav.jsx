import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/SiteNav.module.css";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      {/*  */}
      <NavLink to="/">
        <button className={styles.h1_button}>
          <h1>Santi's Countries</h1>
        </button>
      </NavLink>

      <div className={styles.nav_buttons}>
        <div className={styles.nav_button}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav_button
            }
          >
            {" "}
            HOME
          </NavLink>
        </div>

        <div className={styles.nav_button}>
          <NavLink
            to="/activities/create"
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav_button
            }
          >
            {" "}
            CREATE ACTIVITY
          </NavLink>
        </div>

        <div className={styles.nav_button}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav_button
            }
          >
            {" "}
            ABOUT
          </NavLink>
        </div>
      </div>
    </div>
  );
}
