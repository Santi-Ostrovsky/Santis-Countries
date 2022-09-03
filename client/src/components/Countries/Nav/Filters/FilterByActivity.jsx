import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paging } from "../../../../redux/actions/countries";

export default function FilterByActivity({ setFilterCountries }) {
  const dispatch = useDispatch();
  let activities = useSelector((state) => state.activities.activities);

  activities = Array.from(new Set(activities?.map((a) => a.name))).sort();

  const handleChange = (e) => {
    setFilterCountries((state) => {
      return {
        ...state,
        byActivities: e.target.value,
      };
    });
    dispatch(paging(1));
  };

  return (
    <div>
      <label>
        Filter By Activity
        <select id="activity" onChange={(e) => handleChange(e)}>
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

// BOTÓN PARA ELIMINAR ACTIVIDADES con resultado = a handleChange.
