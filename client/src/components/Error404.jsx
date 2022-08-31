import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Error404.module.css";

export default function Error404() {
  return (
    <div className={styles.container}>
      <div className={styles.error_container}>
        <div className={styles.error}>
          <h2>🚧 ERROR 404 🚧</h2>
        </div>
        <div className={styles.error_description}>
          <h3>Page Not Found</h3>
        </div>
      </div>
      <div className={styles.button}>
        <Link to="/home">
          <button className={styles.inner_button}>← Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
