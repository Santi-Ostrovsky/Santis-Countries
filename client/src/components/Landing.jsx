import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.msg}>
          <h1 className={styles.title}>Santi's Countries</h1>
          <p className={styles.p}>
            Welcome to my countries App, where you can learn about every country
            in the world...
          </p>
        </div>
        <Link to="/countries">
          <button className={styles.button}>
            <span className={styles.actual_text}>&nbsp;discover&nbsp;</span>
            <span className={styles.hover_text} aria-hidden="true">
              &nbsp;discover&nbsp;
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
