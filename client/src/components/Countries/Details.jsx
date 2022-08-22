import React from "react";
import SiteNav from "../SiteNav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetails } from "../../redux/actions";
import Countries from "./Countries";

export default function Details() {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, [dispatch, id]);
  console.log(details);
  const {
    name,
    flag,
    continent,
    capital,
    subregion,
    area,
    population,
    officialName,
    region,
    unMember,
    maps,
    timezones,
    activities,
  } = details;

  return (
    <>
      <SiteNav />
      <div key={id}>
        <img src={flag} alt={`${name}'s flag`} />
        <h2>{name}</h2>
        <h3>Official Name: {officialName}</h3>
        <h4>Capital: {capital}</h4>
        <h4>Continent: {continent}</h4>
        <h5>Region: {region}</h5>
        <h5>Subregion: {subregion}</h5>
        <h5>Population: {population}</h5>
        <h5>Area: {area}</h5>
        <h5>Is a UN Member: {unMember ? "✔" : "❌"}</h5>
        {/* <iframe title={name} src={maps} allowFullScreen="" loading="lazy"
        referencepolicy="no-referrer-when-downgrade" /> */}
        <h5>Timezone: {timezones}</h5>
        <h4>Activities</h4>
        {activities?.map((a) => {
          return (
            <div key={a.id}>
              <h5>{a.name}</h5>
              <p>{a.difficulty}</p>
              <p>{a.duration}</p>
              <p>{a.season}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
