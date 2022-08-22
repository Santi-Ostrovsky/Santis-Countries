import React from "react";
import FilterCountries from "./FilterCountries";
import SearchBar from "./SearchBar";

export default function Bar() {
  return (
    <>
      <h2>Bar</h2>
      <SearchBar />
      <FilterCountries />
    </>
  );
}
