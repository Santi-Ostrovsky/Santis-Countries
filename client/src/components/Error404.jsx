import React from "react";
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
        <button
          className={styles.inner_button}
          onClick={() => window.history.go(-1)}
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}
