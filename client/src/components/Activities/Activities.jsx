import React from "react";
import SiteNav from "../SiteNav";
import PagingActivities from "./PagingActivities";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Activities() {
  let activities = useSelector((state) => state.activities);
  console.log(activities);

  return (
    <>
      <h1>Activities </h1>
      <SiteNav />
      <Link to="/activities/create">
        <button>Create Activity</button>
      </Link>
      <PagingActivities />
    </>
  );
}

// PROMPT (SEGURO DESEA ELIMINAR LA ACTIVIDAD? REACT/TEORIA/16_ROUTING:405)
