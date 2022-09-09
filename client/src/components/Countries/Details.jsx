import React from "react";
import SiteNav from "../SiteNav";
import Loader2 from "../Loader2";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetails } from "../../redux/actions/countries";
import { deleteActivity } from "../../redux/actions/activities";
import styles from "../../styles/Countries/Details.module.css";

export default function Details() {
  const details = useSelector((state) => state.countries.details);
  const loaded = useSelector((state) => state.countries.loaded);
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
    <div className={styles.container}>
      <SiteNav />

      {/* {!loaded && (
        <div className={styles.id_container}>
          <div className={styles.id}>{id}</div>
        </div>
      )}

      {!loaded && (
        <div className={styles.map_container}>
          <a
            href={maps}
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
            className={styles.map}
          >
            <div className={styles.map_img}>
              <svg
                width="74px"
                height="74px"
                viewBox="10 8 473.658 473.658"
                style={{ enableBackground: "new 0 0 473.658 473.658" }}
              >
                <circle
                  style={{ fill: "#A2D4DE" }}
                  cx="236.829"
                  cy="236.829"
                  r="236.829"
                />
                <path
                  style={{ fill: "#6CC077" }}
                  d="M94.836,221.598c0,0-36.944,80.57-29.677,99.941c0,0-6.054,90.854,160.511,81.766
	c0,0,19.809,46.921,63.734,64.422c66.752-15.142,122.794-58.424,154.947-116.769L332.881,85.319L28.036,124.944
	c-13.863,25.818-23.043,54.508-26.491,84.938C18.855,215.416,66.068,228.908,94.836,221.598z"
                />
                <g>
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M231.033,401.667c-6.903-22.636-14.712-81.703,61.681-141.11
		c26.768-20.83,29.517-43.48,27.097-58.813c-4.588-29.135-32.232-56.935-70.417-70.821c-55.021-20.014-90.764,20.085-119.484,52.295
		c-13.205,14.805-25.672,28.791-37.067,33.129c-23.35,8.893-64.77-2.311-90.7-11.155c-0.512,3.799-0.927,7.618-1.257,11.473
		c27.505,9.188,70.043,20.048,95.951,10.168c13.949-5.31,26.69-19.596,41.442-36.147c27.849-31.233,59.419-66.625,107.282-49.213
		c34.408,12.513,59.205,36.854,63.173,62.018c2.79,17.711-5.134,34.378-22.905,48.215c-81.89,63.689-73.105,128.381-65.522,153.238
		c10,32.789,33.159,52.545,61.184,64.456c6.544-1.249,12.988-2.782,19.326-4.559C268.728,454.919,241.608,436.352,231.033,401.667z"
                  />
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M194.71,404.924c-50.537,0-94.346-9.364-116.784-36.285c-32.247-38.69-20.5-104.862,28.559-160.934
		l8.208,7.18c-50.672,57.911-52.635,117.682-28.387,146.772c56.614,67.941,270.93,12.415,351.616-8.489l6.858-1.784l4.084,10.131
		l-8.208,2.199C388.477,377.236,281.633,404.924,194.71,404.924z"
                  />
                </g>
                <path
                  style={{ fill: "#CC3432" }}
                  d="M203.36,125.695c-23.021,0-41.689,18.676-41.689,41.704c0,30.324,39.344,70.869,42.889,70.869
	c3.534,0,40.492-44.116,40.492-70.869C245.049,144.371,226.388,125.695,203.36,125.695z M203.161,181.337
	c-9.042,0-16.361-7.128-16.361-15.931c0-8.788,7.318-15.916,16.361-15.916c9.035,0,16.361,7.128,16.361,15.916
	C219.522,174.209,212.196,181.337,203.161,181.337z"
                />
                <path
                  style={{ fill: "#BA2E2D" }}
                  d="M204.556,240.142c-5.235,0-44.759-41.88-44.759-72.739c0-24.031,19.547-43.574,43.559-43.574
	c24.023,0,43.559,19.547,43.559,43.574C246.918,194.478,209.765,240.142,204.556,240.142z M203.36,127.565
	c-21.955,0-39.819,17.864-39.819,39.834c0,28.346,35.126,65.566,40.975,68.861c5.587-3.631,38.667-43.866,38.667-68.861
	C243.179,145.433,225.315,127.565,203.36,127.565z M203.161,183.207c-10.052,0-18.231-7.984-18.231-17.8
	c0-9.809,8.182-17.786,18.231-17.786s18.231,7.977,18.231,17.786C221.392,175.223,213.213,183.207,203.161,183.207z M203.161,151.36
	c-7.992,0-14.491,6.298-14.491,14.046s6.499,14.061,14.491,14.061s14.491-6.312,14.491-14.061S211.153,151.36,203.161,151.36z"
                />
              </svg>
            </div>
          </a>
        </div>
      )} */}

      <div key={id} className={styles.all_container}>
        {!loaded && (
          <div className={styles.id_container}>
            <div className={styles.id}>{id}</div>
          </div>
        )}

        {!loaded && (
          <div className={styles.map_container}>
            <a
              href={maps}
              rel="noreferrer"
              target="_blank"
              referencepolicy="no-referrer-when-downgrade"
              className={styles.map}
            >
              <div className={styles.map_img}>
                <svg
                  width="74px"
                  height="74px"
                  viewBox="10 8 473.658 473.658"
                  style={{ enableBackground: "new 0 0 473.658 473.658" }}
                >
                  <circle
                    style={{ fill: "#A2D4DE" }}
                    cx="236.829"
                    cy="236.829"
                    r="236.829"
                  />
                  <path
                    style={{ fill: "#6CC077" }}
                    d="M94.836,221.598c0,0-36.944,80.57-29.677,99.941c0,0-6.054,90.854,160.511,81.766
	c0,0,19.809,46.921,63.734,64.422c66.752-15.142,122.794-58.424,154.947-116.769L332.881,85.319L28.036,124.944
	c-13.863,25.818-23.043,54.508-26.491,84.938C18.855,215.416,66.068,228.908,94.836,221.598z"
                  />
                  <g>
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M231.033,401.667c-6.903-22.636-14.712-81.703,61.681-141.11
		c26.768-20.83,29.517-43.48,27.097-58.813c-4.588-29.135-32.232-56.935-70.417-70.821c-55.021-20.014-90.764,20.085-119.484,52.295
		c-13.205,14.805-25.672,28.791-37.067,33.129c-23.35,8.893-64.77-2.311-90.7-11.155c-0.512,3.799-0.927,7.618-1.257,11.473
		c27.505,9.188,70.043,20.048,95.951,10.168c13.949-5.31,26.69-19.596,41.442-36.147c27.849-31.233,59.419-66.625,107.282-49.213
		c34.408,12.513,59.205,36.854,63.173,62.018c2.79,17.711-5.134,34.378-22.905,48.215c-81.89,63.689-73.105,128.381-65.522,153.238
		c10,32.789,33.159,52.545,61.184,64.456c6.544-1.249,12.988-2.782,19.326-4.559C268.728,454.919,241.608,436.352,231.033,401.667z"
                    />
                    <path
                      style={{ fill: "#FFFFFF" }}
                      d="M194.71,404.924c-50.537,0-94.346-9.364-116.784-36.285c-32.247-38.69-20.5-104.862,28.559-160.934
		l8.208,7.18c-50.672,57.911-52.635,117.682-28.387,146.772c56.614,67.941,270.93,12.415,351.616-8.489l6.858-1.784l4.084,10.131
		l-8.208,2.199C388.477,377.236,281.633,404.924,194.71,404.924z"
                    />
                  </g>
                  <path
                    style={{ fill: "#CC3432" }}
                    d="M203.36,125.695c-23.021,0-41.689,18.676-41.689,41.704c0,30.324,39.344,70.869,42.889,70.869
	c3.534,0,40.492-44.116,40.492-70.869C245.049,144.371,226.388,125.695,203.36,125.695z M203.161,181.337
	c-9.042,0-16.361-7.128-16.361-15.931c0-8.788,7.318-15.916,16.361-15.916c9.035,0,16.361,7.128,16.361,15.916
	C219.522,174.209,212.196,181.337,203.161,181.337z"
                  />
                  <path
                    style={{ fill: "#BA2E2D" }}
                    d="M204.556,240.142c-5.235,0-44.759-41.88-44.759-72.739c0-24.031,19.547-43.574,43.559-43.574
	c24.023,0,43.559,19.547,43.559,43.574C246.918,194.478,209.765,240.142,204.556,240.142z M203.36,127.565
	c-21.955,0-39.819,17.864-39.819,39.834c0,28.346,35.126,65.566,40.975,68.861c5.587-3.631,38.667-43.866,38.667-68.861
	C243.179,145.433,225.315,127.565,203.36,127.565z M203.161,183.207c-10.052,0-18.231-7.984-18.231-17.8
	c0-9.809,8.182-17.786,18.231-17.786s18.231,7.977,18.231,17.786C221.392,175.223,213.213,183.207,203.161,183.207z M203.161,151.36
	c-7.992,0-14.491,6.298-14.491,14.046s6.499,14.061,14.491,14.061s14.491-6.312,14.491-14.061S211.153,151.36,203.161,151.36z"
                  />
                </svg>
              </div>
            </a>
          </div>
        )}

        {loaded ? (
          <div className={styles.loader}>
            <Loader2 />
          </div>
        ) : (
          <div className={styles.details_container}>
            <img src={flag} alt={`${name}'s flag`} className={styles.flag} />

            <div className={styles.name_container}>
              <h2 className={styles.name}>{name}</h2>
            </div>

            <div className={styles.official_container}>
              <div className={styles.official_name}>
                Official Name:{" "}
                <span className={styles.off_name}>{officialName}</span>
              </div>
            </div>

            <div className={styles.capital_container}>
              <div className={styles.capital}>Capital: </div>
              <span className={styles.cap}>{capital}</span>
            </div>

            <div className={styles.continent_container}>
              <div className={styles.continent}>Continent: </div>
              <span className={styles.cont}>{continent}</span>
            </div>

            <div className={styles.region_container}>
              <div className={styles.region}>Region: </div>
              <span className={styles.reg}>{region}</span>
            </div>

            <div className={styles.subregion_container}>
              <div className={styles.subregion}>Subregion: </div>
              <span className={styles.sub}>{subregion}</span>
            </div>

            <div className={styles.population_container}>
              <div className={styles.population}>Population: </div>
              <span className={styles.pop}>{population}</span>
            </div>

            <div className={styles.area_container}>
              <div className={styles.area}>Area: </div>
              <span className={styles.km2}>
                {area} km<sup>2</sup>
              </span>
            </div>

            <div className={styles.un_container}>
              <div className={styles.un}>
                Is a UN Member: {unMember ? "✔" : "❌"}
              </div>
            </div>

            <div className={styles.timezone_container}>
              <div className={styles.timezone}>Timezone: </div>
              <div className={styles.tz}>{timezones}</div>
            </div>
          </div>
        )}

        <div className={styles.title}>Activities</div>
        <div className={styles.activities_container}>
          <div className={styles.scrollable}>
            {activities?.map((a) => {
              return (
                <div key={a.id} className={styles.activity_card}>
                  <div className={styles.remove_button}>
                    <button
                      onClick={() =>
                        dispatch(
                          deleteActivity(a.id),
                          window.location.reload(false)
                        )
                      }
                    >
                      ❌
                    </button>
                  </div>
                  <div className={styles.activityName}>{a.name}</div>
                  <div className={styles.line}>
                    Difficulty:{" "}
                    {a.difficulty === 1
                      ? "Beginner"
                      : a.difficulty === 2
                      ? "Amateur"
                      : a.difficulty === 3
                      ? "Intermediate"
                      : a.difficulty === 4
                      ? "Advanced"
                      : "Expert"}
                  </div>
                  <div className={styles.line}>
                    Duration: {a.duration} {a.duration === 1 ? "hour" : "hours"}
                  </div>
                  <div className={styles.line}>
                    Season:{" "}
                    {a.season[0].toUpperCase() +
                      a.season.slice(1).toLowerCase()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.back_button}>
          <button
            className={styles.back_inner_button}
            onClick={() => window.history.go(-1)}
          >
            ← Go Back
          </button>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
