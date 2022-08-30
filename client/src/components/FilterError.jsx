import React from "react";
import styles from "../styles/Countries/FilterError.module.css";

export default function Error() {
  return (
    <div className={styles.error_container}>
      <h2>No countries match the search criteria</h2>
    </div>
  );
}
