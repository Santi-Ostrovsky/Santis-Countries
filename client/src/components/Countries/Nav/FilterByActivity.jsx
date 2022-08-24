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

  return (
    <div>
      <label>
        Filter By Activity
        <select onChange={(e) => dispatch(filterByActivity(e.target.value))}>
          <option value="All">All</option>
          {activities?.map((a) => {
            return (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
