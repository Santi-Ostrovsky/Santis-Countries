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
  console.log(allCountries);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showCountries());
  }, [dispatch]);

  const [error, setError] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "",
    picture: "",
    countries: [],
  });

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
      setError(false);
      setFields({ ...fields, name: e.target.value });
    } else {
      setError(true);
    }
  };

  const handleCountries = (e) => {
    if (!fields.countries?.includes(e.target.value))
      setFields({
        ...fields,
        countries: [...fields.countries, e.target.value],
      });
    else alert(`${e.target.value} has already been selected.`);
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
      picture: "",
      countries: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fields.name !== "") {
      dispatch(createActivity(fields));
      handleReset();
      alert(`Activity "${fields.name}" successfully created!`);
      navigate(`/countries`);
    } else alert(`Activity name cannot be empty`);
  };
  return (
    <>
      <SiteNav />
      <h2>CreateForm</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Activity Name
          <input
            type="text"
            value={fields.name}
            placeholder="ex: Hiking"
            onChange={(e) => handleName(e)}
          ></input>
        </label>
        <span className={error ? "error" : "noError"}>
          Activity name can only contain letters and white spaces
        </span>

        <br />

        <label>
          Difficulty
          <input
            type="range"
            defaultValue={1}
            min={1}
            max={5}
            // value={fields.difficulty}
            step={1}
            onChange={(e) =>
              setFields({ ...fields, difficulty: e.target.value })
            }
          ></input>
        </label>
        {fields.difficulty}

        <br />

        <label>
          Duration
          <input
            type="range"
            defaultValue={1}
            min={1}
            max={24}
            // value={fields.duration}
            step={1}
            onChange={(e) => setFields({ ...fields, duration: e.target.value })}
          ></input>
        </label>
        {fields.duration}

        <br />

        <label>
          Season
          <select
            onChange={(e) => setFields({ ...fields, season: e.target.value })}
            required
          >
            <option>Select Season</option>
            {["Summer", "Autumn", "Winter", "Spring"].map((s, i) => {
              return (
                <option key={i} value={s}>
                  {s}
                </option>
              );
            })}
          </select>
        </label>

        <br />

        <label>
          Photo
          <input
            type="text"
            placeholder="Insert image URL"
            onChange={(e) => setFields({ ...fields, picture: e.target.value })}
          />
        </label>

        <br />

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

        <br />

        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
