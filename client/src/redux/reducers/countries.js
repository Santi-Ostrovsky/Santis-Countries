import {
  GET_COUNTRIES,
  GET_DETAILS,
  GET_COUNTRY_BY_NAME,
  SET_CURRENT_PAGE,
} from "../actions/actionTypes";

const initialState = {
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: payload,
      };
    default:
      return { ...state };
  }
}
