import React from "react";
import SiteNav from "../SiteNav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getActivityDetails } from "../../redux/actions/activities";

export default function ActivityDetails() {
  let details = useSelector((state) => state.activities.details);
  details = details[0];
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(details);
  console.log(details.name);

  useEffect(() => {
    dispatch(getActivityDetails(id));
  }, [dispatch, id]);

  //   const { name, difficulty, duration, season, countries } = details;

  return (
    <div>
      <h1>{details.name}</h1>
      {/* <SiteNav />
      <div key={id}> */}
      {/* <img src={img} alt={`${name}'s flag`} /> */}
      {/* <h2>{name}</h2>
        <h4>Difficulty</h4>
        <span>{difficulty}</span>
        <h4>Duration</h4>
        <span>{duration} Hs.</span>
        <h5>Season</h5>
        <span>{season}</span>
        <h5>Countries</h5>
        <ul>
          {countries.map((c) => {
            return <li key={c.id}>{c.name}</li>;
          })}
        </ul>
      </div> */}
    </div>
  );
}
