import React from "react";
import { useDispatch } from "react-redux";
import { orderAlphabetically } from "../../../redux/actions/countries";

export default function OrderByAZ() {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Order Alphabetically
        <select onChange={(e) => dispatch(orderAlphabetically(e.target.value))}>
          <option value="All">None</option>
          <option value="A → Z">A → Z</option>
          <option value="Z → A">Z → A</option>
        </select>
      </label>
    </div>
  );
}

// MODIFICAR QUE LA VERGA ESTA NO ACTUALIZA EL OTRO ORDENAMIENTO
// CREAR ESTADO GLOBAL PARA CADA SELECTOR
