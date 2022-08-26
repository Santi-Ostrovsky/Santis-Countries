import React from "react";

export default function CountryCard({ name, flag, continent }) {
  return (
    <>
      <img src={flag} alt={`${name} flag`} />
      <h4>{name}</h4>
      <h5>{continent}</h5>
    </>
  );
}
