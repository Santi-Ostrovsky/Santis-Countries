import React from "react";
import { getCountryName } from "../../../redux/actions/countries";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { paging } from "../../../redux/actions/countries";
import styles from "../../../styles/Countries/Nav/SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  let [state, setState] = useState({
    search: "",
    error: false,
  });

  const handleClear = () => {
    document.getElementById("continent").selectedIndex = 0;
    document.getElementById("activity").selectedIndex = 0;
    document.getElementById("az").selectedIndex = 0;
    document.getElementById("population").selectedIndex = 0;
  };

  const handleChange = (e) => {
    if (/^[a-z\s]*$/gi.test(e.target.value)) {
      setState({ search: e.target.value, error: false });
      dispatch(getCountryName(e.target.value));
      handleClear();
      dispatch(paging(1));
    } else setState({ ...state, error: true });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Search Countries by Name
          <input
            type="search"
            name="country"
            value={state.search}
            placeholder="ex: Argentina"
            onChange={(e) => handleChange(e)}
            className={`searchBar ${styles.search_bar}`}
            autoComplete="off"
          ></input>
        </label>
      </form>
      <div className={styles.err_msg}>
        <span className={state.error ? styles.error : styles.noError}>
          Country name can only contain letters and white spaces
        </span>
      </div>
    </div>
  );
}
