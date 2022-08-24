import {
  GET_COUNTRIES,
  GET_DETAILS,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_ALPHABETICALLY,
  ORDER_BY_POPULATION,
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
    //
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countries: payload,
      };
    //
    case GET_DETAILS:
      return {
        ...state,
        details: payload,
      };
    //
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: payload,
      };
    //
    case FILTER_BY_CONTINENT:
      const allCountries = [...state.allCountries];
      const filteredCountries =
        payload === "All"
          ? allCountries
          : allCountries.filter((c) => c.continent === payload);
      return {
        ...state,
        countries: state.allCountries.filter((c) =>
          filteredCountries.includes(c)
        ),
      };
    //
    case FILTER_BY_ACTIVITY:
      const allCountries2 = [...state.allCountries];

      let activityCountries = allCountries2
        .filter((c) => c.activities.length)
        .filter((c) =>
          c.activities.map((e) => Object.values(e)[0]).includes(payload)
        );

      const countriesByActivity =
        payload === "All" ? allCountries2 : activityCountries;
      return {
        ...state,
        countries: state.allCountries.filter((c) =>
          countriesByActivity.includes(c)
        ),
      };
    //
    case ORDER_ALPHABETICALLY:
      let orderedCountries_az = state.countries;
      if (payload === "A → Z")
        orderedCountries_az = state.countries.sort((a, b) => a.name - b.name);
      if (payload === "Z → A")
        orderedCountries_az = state.countries.sort((a, b) => b.name - a.name);
      return {
        ...state,
        countries: orderedCountries_az,
      };
    //
    case ORDER_BY_POPULATION:
      let orderedCountries_pop;
      if (payload === "HIGHER")
        orderedCountries_pop = state.countries.sort(
          (a, b) => a.population - b.population
        );
      if (payload === "LOWER")
        orderedCountries_pop = state.countries.sort(
          (a, b) => b.population - a.population
        );
      return {
        ...state,
        countries: orderedCountries_pop,
      };
    //
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };
    //
    default:
      return { ...state };
  }
}
