import React from "react";
import { useDispatch } from "react-redux";
import Filter from "../Nav/Filters/Filters";
import OrderByAZ from "./OrderByAZ";
import OrderByPopulation from "./OrderByPopulation";
import SearchBar from "./SearchBar";
import { showCountries } from "../../../redux/actions/countries";
import styles from "../../../styles/Countries/Nav/Bar.module.css";

export default function Bar() {
  const dispatch = useDispatch();

  const handleClear = () => {
    document.getElementById("continent").selectedIndex = 0;
    document.getElementById("activity").selectedIndex = 0;
    document.getElementById("az").selectedIndex = 0;
    document.getElementById("population").selectedIndex = 0;
    document.getElementsByClassName("searchBar")[0].value = "";
    dispatch(showCountries());
    // window.location.reload(false);
  };

  return (
    <div className={styles.bar}>
      {/*  */}
      <div className={styles.filters}>
        <span className={styles.search_bar}>
          <SearchBar />
        </span>
      </div>

      <div className={styles.filters}>
        <div className={styles.select}>
          <Filter />
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.select}>
          <OrderByAZ />
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.select}>
          <OrderByPopulation />
        </div>
      </div>

      <span className={styles.clear_span}>
        <button className={styles.clear_button} onClick={handleClear}>
          CLEAR FILTERS
        </button>
      </span>
      {/*  */}
    </div>
  );
}
