import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../../../redux/actions/countries";
import FilterByContinent from "./FilterByContinent";
import FilterByActivity from "./FilterByActivity";

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
      <FilterByContinent setFilterCountries={setFilterCountries} />
      <FilterByActivity setFilterCountries={setFilterCountries} />
    </div>
  );
}
