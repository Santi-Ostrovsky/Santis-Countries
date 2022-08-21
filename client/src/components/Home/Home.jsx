import React from "react";
import NavBar from "./Nav/NavBar";
import Countries from "./Countries/Countries";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showCountries } from "../../redux/actions";
// import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCountries(), [dispatch]);
  });

  return (
    <div>
      <h1>HOME</h1>

      {/* <Link to="/">
        <button>BACK</button>
      </Link> */}
      <NavBar />
      <Countries />
    </div>
  );
}
