import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByPopulation } from "../../../redux/actions/countries";

export default function OrderByPopulation() {
  const dispatch = useDispatch();
  let order = useSelector((state) => state.countries.order);

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
