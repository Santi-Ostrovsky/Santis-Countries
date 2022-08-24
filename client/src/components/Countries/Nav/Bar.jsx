import React from "react";
import FilterByActivity from "./FilterByActivity";
import FilterByContinent from "./FilterByContinent";
import OrderByAZ from "./OrderByAZ";
import OrderByPopulation from "./OrderByPopulation";
import SearchBar from "./SearchBar";

export default function Bar() {
  return (
    <>
      <SearchBar />
      <FilterByContinent />
      <FilterByActivity />
      <OrderByAZ />
      <OrderByPopulation />
      <button>CLEAR FILTERS</button>
    </>
  );
}
