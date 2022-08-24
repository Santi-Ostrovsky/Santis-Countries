import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCountries } from "../../../redux/actions/countries";

export default function FilterByContinent() {
  const dispatch = useDispatch();
  let allCountries = useSelector((state) => state.countries.allCountries);

  let continents = new Set(allCountries?.map((c) => c.continent));
  continents = Array.from(continents);

  return (
    <div>
      <label>
        Filter By Continent
        <select onChange={(e) => dispatch(filterCountries(e.target.value))}>
          <option value="All">All</option>
          {continents.map((c, i) => {
            return (
              <option key={i} value={c}>
                {c}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
