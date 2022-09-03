import React from "react";
import { useDispatch } from "react-redux";
import { orderByPopulation } from "../../../redux/actions/countries";
import { paging } from "../../../redux/actions/countries";

export default function OrderByPopulation() {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderByPopulation(e.target.value));
    document.getElementById("az").selectedIndex = 0;
    dispatch(paging(1));
  };

  return (
    <div>
      <label>
        Order By Population
        <select
          id="population"
          onChange={(e) => handleOrder(e)}
          defaultValue={"All"}
        >
          <option value="All">None</option>
          <option value="HIGHER">Low → High</option>
          <option value="LOWER">High → Low</option>
        </select>
      </label>
    </div>
  );
}
