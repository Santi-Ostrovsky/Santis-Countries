import React, { useEffect } from "react";
import SiteNav from "../SiteNav";
import PagingActivities from "./PagingActivities";
import ActivityCard from "./ActivityCard";
import { useSelector, useDispatch } from "react-redux";
import { showActivities } from "../../redux/actions/activities";
import { Link } from "react-router-dom";

export default function Activities() {
  let activities = useSelector((state) => state.activities.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showActivities());
  }, [dispatch]);

  return (
    <>
      <SiteNav />
      <PagingActivities />
      {activities?.map((a) => {
        return (
          <div key={a.id}>
            <Link to={`/activities/${a.id}`}>
              <ActivityCard name={a.name} picture={a.picture} />
            </Link>
          </div>
        );
      })}
      <Link to="/activities/create">
        <button>Create Activity</button>
      </Link>
    </>
  );
}

// PROMPT (SEGURO DESEA ELIMINAR LA ACTIVIDAD? REACT/TEORIA/16_ROUTING:405)
