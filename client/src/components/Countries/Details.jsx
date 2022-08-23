import React from "react";
import SiteNav from "../SiteNav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetails } from "../../redux/actions/countries";

export default function Details() {
  const details = useSelector((state) => state.countries.details);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, [dispatch, id]);
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
    <div>
      <SiteNav />
      <div key={id}>
        <img src={flag} alt={`${name}'s flag`} />
        <h1>{name}</h1>
        <h2>{officialName}</h2>
        <h4>Capital</h4>
        <span>{capital}</span>
        <h4>Continent</h4>
        <span>{continent}</span>
        <h5>Region</h5>
        <span>{region}</span>
        <h5>Subregion</h5>
        <span>{subregion}</span>
        <h5>Population</h5>
        <span>{population}</span>
        <h5>Area</h5>
        <span>
          {area} km<sup>2</sup>
        </span>
        <h5>Is a UN Member: {unMember ? "✔" : "❌"}</h5>
        <a
          href={maps}
          rel="noreferrer"
          target="_blank"
          referencepolicy="no-referrer-when-downgrade"
        >
          MAP
        </a>
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
    </div>
  );
}
