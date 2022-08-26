import React from "react";
import { getCountryName } from "../../../redux/actions/countries";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchBar() {
  const dispatch = useDispatch();

  let [search, setSearch] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();
    setSearch(e.target.value);
    dispatch(getCountryName(e.target.value));
  };

  // SET PAGE 1

  return (
    <div>
      {/* <form onSubmit={(e) => e.preventDefault()}> */}
      <input
        type="search"
        name="country"
        placeholder="Search"
        onChange={(e) => handleChange(e)}
        value={search}
      ></input>
      {/* </form> */}
    </div>
  );
}
