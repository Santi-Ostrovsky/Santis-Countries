import React from "react";

export default function CountryCard({ name, flag, continent }) {
  return (
    <>
      <h4>{name}</h4>
      <img src={flag} alt={`${name} flag`} />
      <h5>{continent}</h5>
    </>
  );
}
