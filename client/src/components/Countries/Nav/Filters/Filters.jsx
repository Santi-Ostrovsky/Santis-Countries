import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../../../redux/actions/countries";
import FilterByContinent from "./FilterByContinent";
import FilterByActivity from "./FilterByActivity";
import styles from "../../../../styles/Countries/Nav/Filters.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  let [filterCountries, setFilterCountries] = useState({
    byContinents: "",
    byActivities: "",
  });

  useEffect(() => {
    dispatch(filter(filterCountries));
  }, [dispatch, filterCountries]);

  return (
    <div>
      <div className={styles.continents}>
        <FilterByContinent setFilterCountries={setFilterCountries} />
      </div>
      <div className={styles.activities}>
        <FilterByActivity setFilterCountries={setFilterCountries} />
      </div>
    </div>
  );
}
