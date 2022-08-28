import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Prompt } from "react-router";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../../redux/actions/activities";
import { showCountries } from "../../redux/actions/countries";
import SiteNav from "../SiteNav";
import "../../styles/Activities/CreateForm.css";

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
    noName: "",
    noSeason: "",
    noCountries: "",
  });
  const [fields, setFields] = useState({
    name: "",
    difficulty: "1",
    duration: "1",
    season: "",
    // picture: "",
    countries: [],
  });

  const camelCasify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  //   const dontLeave = () => (
  //     <>
  //       <Prompt
  //         when={shouldBlockNavigation}
  //         message="You have unsaved changes, are you sure you want to leave?"
  //       />
  //       {/* Component JSX */}
  //     </>
  //   );

  const handleName = (e) => {
    if (/^[a-z\s]*$/gi.test(e.target.value)) {
      console.log(e.target.value);
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
      } else alert(`${e.target.value} has already been selected.`);
    }
  };

  const handleDelete = (e) => {
    fields.countries?.filter((c) => c !== e.target.value);
  };

  const handleReset = () => {
    setFields({
      name: "",
      difficulty: 1,
      duration: 1,
      season: "",
      //   picture: "",
      countries: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.name !== "" && fields.season !== "") {
      camelCasify(fields.name);
      dispatch(createActivity(fields));
      handleReset();
      alert(`Activity "${fields.name}" successfully created!`);
      navigate(`/countries`);
      //
    } else {
      if (fields.name === "") setError({ ...error, noName: true });
      if (fields.season === "" || fields.season === "Select Season")
        setError({ ...error, noSeason: true });
      if (!fields.countries.length) setError({ ...error, noCountries: true });
    }
  };
  return (
    <>
      <SiteNav />

      <h2>Create your own Tourist Activity!</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Activity Name
            <input
              type="text"
              value={fields.name}
              placeholder="ex: Hiking"
              onChange={(e) => handleName(e)}
            ></input>
          </label>
          <p className={error.error ? "error" : "noError"}>
            Activity name can only contain letters and white spaces
          </p>
          <p className={error.noName ? "error" : "noError"}>
            Activity name can not be empty
          </p>
        </div>

        <br />

        <div>
          <label>
            Difficulty
            <input
              type="range"
              defaultValue={"1"}
              min={1}
              max={5}
              // value={fields.difficulty}
              step={1}
              onChange={(e) =>
                setFields({ ...fields, difficulty: e.target.value })
              }
            ></input>
          </label>
          <div>
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

        <br />

        <div>
          <label>
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
          <div>
            {fields.duration + (fields.duration === "1" ? " Hour" : " Hours")}
          </div>
        </div>

        <br />

        <div>
          <label>
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
          <p className={error.noSeason ? "error" : "noError"}>
            Please, select a season
          </p>
        </div>

        {/* <div>Season</div>
        {seasons.map((s, i) => {
          return (
            <div key={i}>
              <label htmlFor={`check-${s}`}>
                {s}
                <input
                  type="checkbox"
                  name="season"
                  id={`checkbox-${s}`}
                  onchange={(e) => handleSeason(e)}
                ></input>
              </label>
            </div>
          );
        })} */}

        <br />

        {/* <label>
          Photo
          <input
            type="text"
            placeholder="Insert image URL"
            onChange={(e) => setFields({ ...fields, picture: e.target.value })}
          />
        </label>

        <br /> */}

        <div>
          <label>
            Countries
            <select onChange={(e) => handleCountries(e)} required>
              <option>Select Countries</option>
              {allCountries?.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
            <br />
          </label>
          {allCountries
            ?.filter((c) => c.id === fields.countries.includes(c.id))
            .map((c) => {
              return (
                <div key={c.id} value={c.id}>
                  {c.flag}
                  {"\n"}
                  {c.name}
                  <button onClick={(e) => handleDelete(e)}>❌</button>
                </div>
              );
            })}
          <p className={error.noCountries ? "error" : "noError"}>
            Please, select at least one country
          </p>
        </div>

        <br />

        <div>
          {/* <button type="button" onClick={handleReset}>
            Reset
          </button> */}
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}
