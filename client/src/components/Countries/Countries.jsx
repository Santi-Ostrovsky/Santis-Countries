import React, { useEffect } from "react";
import SiteNav from "../SiteNav";
import PagingCountries from "./PagingCountries";
import Bar from "./Nav/Bar";
import FilterError from "../FilterError";
import { useSelector, useDispatch } from "react-redux";
import { showCountries, clearDetails } from "../../redux/actions/countries";
import { showActivities } from "../../redux/actions/activities";
import CountryCard from "./CountryCard";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import styles from "../../styles/Countries/Countries.module.css";

export default function Countries() {
  const allCountries = useSelector((state) => state.countries.countries);
  const loaded = useSelector((state) => state.countries.loaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCountries());
    dispatch(showActivities());
    dispatch(clearDetails());
  }, [dispatch]);

  // Paging props
  const currentPage = useSelector((state) => state.countries.page);
  const lastIndex = 10 * currentPage;
  const firstIndex = lastIndex - 10;
  const countriesInPage = allCountries?.slice(firstIndex, lastIndex);

  return (
    <div className={styles.container}>
      <SiteNav />
      <Bar />

      <div className={styles.cards_container}>
        {loaded ? (
          <Loader />
        ) : countriesInPage.length ? (
          countriesInPage.map((c) => {
            return (
              <div key={c.name} className={styles.cards}>
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
            <FilterError />
          </div>
        )}
      </div>

      <div className={styles.paging}>
        <PagingCountries allCountries={allCountries?.length} />
      </div>
    </div>
  );
}
