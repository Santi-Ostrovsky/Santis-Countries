import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paging } from "../../redux/actions/countries";

export default function PagingCountries({ allCountries }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.countries.page);

  const pageNumber = Array(Math.ceil(allCountries / 10))
    .fill(0)
    .map((e, i) => (e = i + 1));

  return (
    <div>
      {pageNumber?.map((p) => {
        return (
          <button key={p} value={p} onClick={() => dispatch(paging(p))}>
            {p}
          </button>
        );
      })}
    </div>
  );
}
