import React from "react";
import styles from "../styles/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span>Loading...</span>
      </div>
    </div>
  );
}
