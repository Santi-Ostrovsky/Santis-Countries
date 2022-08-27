import React from "react";

export default function ActivityCard({ name, picture }) {
  return (
    <>
      <img src={picture} alt={`${name}`} />
      <h3>{name}</h3>
    </>
  );
}
