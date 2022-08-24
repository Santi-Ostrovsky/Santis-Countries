import {
  GET_COUNTRIES,
  GET_DETAILS,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  SET_CURRENT_PAGE,
} from "../actions/actionTypes";

export const initialState = {
  allCountries: [],
  countries: [],
  details: [],
  page: 1,
  //   filteredCountries: [],
  //   countryById: {},
  //   activePage: { page: 1, btn: null },
  //   loaded: false,
};

export default function countries(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countries: payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: payload,
      };
    case FILTER_BY_CONTINENT:
      const allCountries = [...state.allCountries];
      const filteredCountries =
        payload === "All"
          ? allCountries
          : allCountries.filter((c) => c.continent === payload);
      return {
        ...state,
        countries: filteredCountries,
      };
    case FILTER_BY_ACTIVITY:
      const allCountries2 = [...state.allCountries];

      //   const allCountries3 = allCountries2
      //     .filter((c) => c.activities.length && c.activities)
      //     .filter((a) => a === payload);
      //   console.log("allCountries2.filter", allCountries3);

      const countriesByActivity =
        payload === "All"
          ? allCountries2
          : allCountries2.filter((c) =>
              c.activities?.map((a) => a.name === payload)
            );
      return {
        ...state,
        countries: countriesByActivity,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return { ...state };
  }
}
