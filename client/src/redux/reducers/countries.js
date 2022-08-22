import { GET_COUNTRIES, GET_DETAILS } from "../actions/actionTypes";

const initialState = {
  countries: [],
  details: [],
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
        countries: payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: payload,
      };
    default:
      return { ...state };
  }
}
