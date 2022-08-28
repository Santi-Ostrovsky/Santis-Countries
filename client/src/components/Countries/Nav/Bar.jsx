import React from "react";
// import FilterByActivity from "./FilterByActivity";
// import FilterByContinent from "./FilterByContinent";
import Filter from "../Nav/Filters/Filters";
import OrderByAZ from "./OrderByAZ";
import OrderByPopulation from "./OrderByPopulation";
import SearchBar from "./SearchBar";

export default function Bar() {
  const handleClear = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <SearchBar />
      <Filter />
      <OrderByAZ />
      <OrderByPopulation />
      <button onClick={handleClear}>CLEAR FILTERS</button>
    </div>
  );
}
