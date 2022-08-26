import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createActivity } from "../../redux/actions/activities";
import { showCountries } from "../../redux/actions/countries";
import SiteNav from "../SiteNav";

export default function CreateForm() {
  const allCountries = useSelector((state) => state.countries.allCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showCountries());
  }, [dispatch]);

  const [fields, setFields] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "",
    countries: [],
  });

  const handleName = (e) => {
    setFields({ ...fields, name: e.target.value });
  };
  const handleDifficulty = (e) => {
    setFields({ ...fields, difficulty: e.target.value });
  };
  const handleDuration = (e) => {
    setFields({ ...fields, duration: e.target.value });
  };
  const handleSeason = (e) => {
    setFields({ ...fields, season: e.target.value });
  };
  const handleCountries = (e) => {
    setFields({ ...fields, countries: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(fields));
    setFields({
      name: "",
      difficulty: 1,
      duration: 1,
      season: "",
      countries: [],
    });
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
            required
          ></input>
        </label>

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
            onChange={(e) => handleDifficulty(e)}
          ></input>
        </label>

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
            onChange={(e) => handleDuration(e)}
          ></input>
        </label>

        <br />

        <label>
          Season
          <select onChange={(e) => handleSeason(e)} required>
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
          Countries
          <select onChange={(e) => handleCountries(e)} required>
            <option>Select Countries</option>
            {allCountries?.map((c, i) => {
              return (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              );
            })}
          </select>
        </label>

        <br />

        <button type="submit">Create Activity</button>
      </form>
    </>
  );
}
