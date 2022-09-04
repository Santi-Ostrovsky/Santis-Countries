import React from "react";
import { useDispatch } from "react-redux";
import { orderAlphabetically } from "../../../redux/actions/countries";
import { paging } from "../../../redux/actions/countries";

export default function OrderByAZ() {
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderAlphabetically(e.target.value));
    document.getElementById("population").selectedIndex = 0;
    dispatch(paging(1));
  };

  return (
    <div>
      <label>
        Order Alphabetically
        <select id="az" onChange={(e) => handleOrder(e)}>
          <option value="All">None</option>
          <option value="A → Z">A → Z</option>
          <option value="Z → A">Z → A</option>
        </select>
      </label>
    </div>
  );
}
