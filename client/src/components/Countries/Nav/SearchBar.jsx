import React from "react";
import { getCountryName } from "../../../redux/actions/countries";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "../../../styles/Countries/Nav/SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  let [state, setState] = useState({
    search: "",
    error: false,
  });

  const handleChange = (e) => {
    if (/^[a-z\s]*$/gi.test(e.target.value)) {
      setState({ search: e.target.value, error: false });
      dispatch(getCountryName(e.target.value));
    } else setState({ ...state, error: true });
  };

  return (
    <div>
      <label>
        Search Countries by Name
        <input
          type="search"
          name="country"
          placeholder="ex: Argentina"
          onChange={(e) => handleChange(e)}
          value={state.search}
        ></input>
      </label>
      <span className={state.error ? "error" : "noError"}>
        Country name can only contain letters and white spaces
      </span>
    </div>
  );
}
