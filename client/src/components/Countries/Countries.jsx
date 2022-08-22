import React, { useEffect } from "react";
import SiteNav from "../SiteNav";
import PagingCountries from "./PagingCountries";
import Bar from "./Nav/Bar";
import { useSelector, useDispatch } from "react-redux";
import { showCountries } from "../../redux/actions";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

export default function Countries() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCountries());
  }, [dispatch]);
  //   console.log(countries);

  return (
    <div>
      <h1>Countries</h1>
      <SiteNav />
      <Bar />

      {countries &&
        countries.map((c) => {
          return (
            <div key={c.id}>
              <Link to={`/countries/${c.id}`}>
                <CountryCard
                  name={c.name}
                  flag={c.flag}
                  continent={c.continent}
                />
              </Link>
            </div>
          );
        })}

      <PagingCountries />
    </div>
  );
}
