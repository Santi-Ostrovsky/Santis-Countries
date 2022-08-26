import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paging } from "../../../../redux/actions/countries";

export default function FilterByContinent({ setFilterCountries }) {
  const dispatch = useDispatch();
  let allCountries = useSelector((state) => state.countries.allCountries);

  let continents = new Set(allCountries?.map((c) => c.continent));
  continents = Array.from(continents);

  const handleChange = (e) => {
    setFilterCountries((state) => {
      return {
        ...state,
        byContinents: e.target.value,
      };
    });
    dispatch(paging(1));
  };

  return (
    <div>
      <label>
        Filter By Continent
        <select onChange={(e) => handleChange(e)}>
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
