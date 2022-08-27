import React, { useEffect } from "react";
import SiteNav from "../SiteNav";
import PagingCountries from "./PagingCountries";
import Bar from "./Nav/Bar";
import Error from "../Error";
import { useSelector, useDispatch } from "react-redux";
import { showCountries } from "../../redux/actions/countries";
import { showActivities } from "../../redux/actions/activities";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

export default function Countries() {
  const allCountries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCountries());
    dispatch(showActivities());
  }, [dispatch]);

  // Paging props
  const currentPage = useSelector((state) => state.countries.page);
  const lastIndex = 10 * currentPage;
  const firstIndex = lastIndex - 10;
  const countriesInPage = allCountries?.slice(firstIndex, lastIndex);

  return (
    <div>
      <SiteNav />
      <Bar />
      <PagingCountries allCountries={allCountries?.length} />

      {countriesInPage.length ? (
        countriesInPage.map((c) => {
          return (
            <div key={c.name}>
              <Link to={`/countries/${c.id}`}>
                <CountryCard
                  name={c.name}
                  flag={c.flag}
                  continent={c.continent}
                />
              </Link>
            </div>
          );
        })
      ) : (
        <div>
          <Error />
        </div>
      )}
    </div>
  );
}
