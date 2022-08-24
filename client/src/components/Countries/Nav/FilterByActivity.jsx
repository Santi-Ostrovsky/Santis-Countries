import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByActivity } from "../../../redux/actions/countries";
import { showActivities } from "../../../redux/actions/activities";

export default function FilterByActivity() {
  const dispatch = useDispatch();
  let activities = useSelector((state) => state.activities.activities);

  useEffect(() => {
    dispatch(showActivities());
  }, [dispatch]);

  activities = new Set(activities?.map((a) => a.name));
  activities = Array.from(activities);

  return (
    <div>
      <label>
        Filter By Activity
        <select onChange={(e) => dispatch(filterByActivity(e.target.value))}>
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
