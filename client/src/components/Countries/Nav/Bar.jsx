import React from "react";
// import FilterByActivity from "./FilterByActivity";
// import FilterByContinent from "./FilterByContinent";
import Filter from "../Nav/Filters/Filters";
import OrderByAZ from "./OrderByAZ";
import OrderByPopulation from "./OrderByPopulation";
import SearchBar from "./SearchBar";
import styles from "../../../styles/Countries/Nav/Bar.module.css";

export default function Bar() {
  const handleClear = () => {
    window.location.reload(false);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.filters}>
        <span className={styles.search_bar}>
          <SearchBar />
        </span>
      </div>
      <div className={styles.filters}>
        <Filter />
      </div>
      <div className={styles.filters}>
        <OrderByAZ />
      </div>
      <div className={styles.filters}>
        <OrderByPopulation />
      </div>
      <span className={styles.clear_span}>
        <button className={styles.clear_button} onClick={handleClear}>
          CLEAR FILTERS
        </button>
      </span>
    </div>
  );
}
