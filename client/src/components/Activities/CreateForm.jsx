import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Prompt } from "react-router";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../../redux/actions/activities";
import { showCountries } from "../../redux/actions/countries";
import SiteNav from "../SiteNav";
import FormCard from "./FormCard";
import styles from "../../styles/Activities/CreateForm.module.css";

export default function CreateForm() {
  const allCountries = useSelector((state) => state.countries.allCountries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const seasons = ["Summer", "Autumn", "Winter", "Spring"];

  useEffect(() => {
    dispatch(showCountries());
  }, [dispatch]);

  const [error, setError] = useState({
    error: false,
    noName: null,
    noSeason: null,
    noCountries: null,
  });
  const [fields, setFields] = useState({
    name: "",
    difficulty: "1",
    duration: "1",
    season: "",
    // picture: "",
    countries: [],
  });

  const format = (str) => {
    // return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
    return str
      .trim()
      .toLowerCase()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Prevent user from leaving with unsaved data

  // ----------------
  // HANDLERS
  // ----------------

  const handleName = (e) => {
    if (/^[a-z\s]*$/gi.test(e.target.value)) {
      setError({ ...error, error: false, noName: false });
      setFields({ ...fields, name: e.target.value });
    } else {
      setError({ ...error, error: true });
    }
  };

  const handleSeason = (e) => {
    if (e.target.value !== "Select Season") {
      setFields({ ...fields, season: e.target.value });
      setError({ ...error, noSeason: false });
    } else {
      setFields({ ...fields, season: "" });
      setError({ ...error, noSeason: true });
    }
  };

  const handleCountries = (e) => {
    if (e.target.value !== "Select Countries") {
      if (!fields.countries?.includes(e.target.value)) {
        setError({ ...error, noCountries: false });
        setFields({
          ...fields,
          countries: [...fields.countries, e.target.value],
        });
      } else {
        let filtrados = allCountries.filter((c) =>
          fields.countries.includes(c.id)
        );
        let nombres = filtrados.map((ele) => ele.name);
        console.log(nombres);
        // alert(
        //   `${
        //     allCountries.filter((c) => fields.countries.includes(c.id))[0].name
        //   } has already been selected.`
        // );
      }
    }
  };

  //   const handleReset = () => {
  //     setFields({
  //       name: "",
  //       difficulty: null,
  //       duration: null,
  //       season: null,
  //       //   picture: "",
  //       countries: null,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.name !== "" && fields.season !== "") {
      fields.name = format(fields.name);
      dispatch(createActivity(fields));
      //   handleReset();
      alert(`Activity "${fields.name}" successfully created!`);
      navigate(`/home`);
      //
    } else {
      if (fields.name === "") setError({ ...error, noName: true });
      if (fields.season === "" || fields.season === "Select Season")
        setError({ ...error, noSeason: true });
      if (!fields.countries.length) setError({ ...error, noCountries: true });
    }
  };

  // ----------------
  // RENDER FORM
  // ----------------

  return (
    <div className={styles.container}>
      <SiteNav />

      <div className={styles.form_container}>
        <div className={styles.title}>Create your own Tourist Activity!</div>

        <div className={styles.outer_form}>
          {/*  */}
          <div className={styles.inner_form}>
            <form onSubmit={(e) => handleSubmit(e)}>
              {/*  */}
              <div className={styles.form_field}>
                <label className={styles.activity_name}>
                  <span className={styles.name}>Activity Name</span>
                  <input
                    type="text"
                    value={fields.name}
                    placeholder="ex: Hiking"
                    onChange={(e) => handleName(e)}
                    className={styles.search_bar}
                  ></input>
                </label>
                <div className={styles.error_msg}>
                  <div
                    className={
                      error.error || error.noName
                        ? styles.error
                        : styles.noError
                    }
                  >
                    {error.error
                      ? "Activity name can only contain letters and white spaces"
                      : "Activity name can not be empty"}
                  </div>
                </div>
              </div>

              <div className={styles.form_field}>
                <label className={styles.difficulty}>
                  Difficulty
                  <input
                    type="range"
                    defaultValue={"1"}
                    min={1}
                    max={5}
                    step={1}
                    onChange={(e) =>
                      setFields({ ...fields, difficulty: e.target.value })
                    }
                  ></input>
                </label>
                <div className={styles.difficulty_msg}>
                  {fields.difficulty === "1"
                    ? "Beginner"
                    : fields.difficulty === "2"
                    ? "Amateur"
                    : fields.difficulty === "3"
                    ? "Intermediate"
                    : fields.difficulty === "4"
                    ? "Advanced"
                    : "Expert"}
                </div>
              </div>

              <div className={styles.form_field}>
                <label className={styles.duration}>
                  Duration
                  <input
                    type="range"
                    defaultValue={"1"}
                    min={1}
                    max={24}
                    step={1}
                    onChange={(e) =>
                      setFields({ ...fields, duration: e.target.value })
                    }
                  ></input>
                </label>
                <div className={styles.duration_msg}>
                  {fields.duration +
                    (fields.duration === "1" ? " Hour" : " Hours")}
                </div>
              </div>

              <div className={styles.form_field}>
                <label className={styles.season}>
                  Season
                  <select onChange={(e) => handleSeason(e)} required>
                    <option>Select Season</option>
                    {seasons.map((s, i) => {
                      return (
                        <option key={i} value={s.toLowerCase()}>
                          {s}
                        </option>
                      );
                    })}
                  </select>
                </label>
                <div
                  className={
                    error.error || error.noName ? styles.error : styles.noError
                  }
                >
                  Please, select a season
                </div>
              </div>

              {/* <label>
          Photo
          <input
            type="text"
            placeholder="Insert image URL"
            onChange={(e) => setFields({ ...fields, picture: e.target.value })}
          />
        </label> */}

              <div>
                <label className={styles.countries}>
                  Countries
                  <select onChange={(e) => handleCountries(e)} required>
                    <option>Select Countries</option>
                    {allCountries
                      ?.sort((a, b) => (a.name < b.name ? -1 : 1))
                      .map((c) => {
                        return (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        );
                      })}
                  </select>
                </label>

                <div
                  className={
                    error.error || error.noName ? styles.error : styles.noError
                  }
                >
                  Please, select at least one country
                </div>
              </div>

              <div className={styles.footer}>
                {/* <button type="button" onClick={handleReset}>
            Reset
          </button> */}
                <button
                  type="button"
                  onClick={() => window.location.reload(false)}
                  className={styles.reset}
                >
                  RESET
                </button>
                <button type="submit" className={styles.create}>
                  CREATE
                </button>
              </div>
            </form>

            <div className={styles.cards_container}>
              <div>
                {allCountries
                  ?.filter((c) => fields.countries.includes(c.id))
                  .map((c) => {
                    return (
                      <div className={styles.card}>
                        <FormCard
                          key={c.id}
                          id={c.id}
                          name={c.name}
                          flag={c.flag}
                          state={fields}
                          setState={setFields}
                        />
                      </div>
                    );
                  })}
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
