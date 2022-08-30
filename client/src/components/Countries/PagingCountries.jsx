import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paging } from "../../redux/actions/countries";
import styles from "../../styles/Countries/Paging.module.css";

export default function PagingCountries({ allCountries }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.countries.page);

  const pageNumber = Array(Math.ceil(allCountries / 10))
    .fill(0)
    .map((e, i) => (e = i + 1));

  return (
    <div className={styles.paging_container}>
      {pageNumber?.map((p) => {
        return (
          <button
            key={p}
            value={p}
            className={styles.page_buttons}
            disabled={p === page ? true : false}
            onClick={() => dispatch(paging(p))}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
}
