import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  //   filterCountries,
  //   filterByActivity,
  filter,
  paging,
} from "../../../redux/actions/countries";
import { showActivities } from "../../../redux/actions/activities";

export default function Filter() {
  const dispatch = useDispatch();
  let [filterCountries, setFilterCountries] = useState({
    byContinents: [],
    byActivities: [],
  });

  // Countries Filter
  let allCountries = useSelector((state) => state.countries.allCountries);
  let continents = new Set(allCountries?.map((c) => c.continent));
  continents = Array.from(continents).sort();

  const handleContinents = (e) => {
    setFilterCountries((state) => {
      return {
        ...state,
        byContinents: e.target.value,
      };
    });
    dispatch(paging(1));
  };

  // Activities Filter
  let activities = useSelector((state) => state.activities.activities);
  useEffect(() => {
    dispatch(showActivities());
  }, [dispatch]);
  activities = new Set(activities?.map((a) => a.name));
  activities = Array.from(activities).sort();

  const handleActivities = (e) => {
    setFilterCountries((state) => {
      return {
        ...state,
        byActivities: e.target.value,
      };
    });
    dispatch(paging(1));
  };

  // ----------
  useEffect(() => {
    dispatch(filter(filterCountries));
  }, [dispatch, filterCountries]);

  return (
    <div>
      <label>
        Filter By Continent
        <select onChange={(e) => handleContinents(e)}>
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

      <br />

      <label>
        Filter By Activity
        <select onChange={(e) => handleActivities(e)}>
          <option value="All">All</option>
          {activities?.map((a, i) => {
            return (
              <option key={i} value={a}>
                {a}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
