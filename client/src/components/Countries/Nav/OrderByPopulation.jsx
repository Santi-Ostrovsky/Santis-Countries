import React from "react";
import { useDispatch } from "react-redux";
import { orderByPopulation } from "../../../redux/actions/countries";

export default function OrderByPopulation() {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Order By Population
        <select
          onChange={(e) => dispatch(orderByPopulation(e.target.value))}
          defaultValue={"All"}
        >
          <option value="All">All</option>
          <option value="HIGHER">Higher</option>
          <option value="LOWER">Lower</option>
        </select>
      </label>
    </div>
  );
}
