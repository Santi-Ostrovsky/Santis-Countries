import axios from "axios";
import {
  GET_COUNTRIES,
  GET_DETAILS,
  GET_COUNTRY_BY_NAME,
  //   FILTER_BY_CONTINENT,
  //   FILTER_BY_ACTIVITY,
  FILTER,
  ORDER_ALPHABETICALLY,
  ORDER_BY_POPULATION,
  SET_CURRENT_PAGE,
} from "./actionTypes";

const PATH = "http://localhost:3001/countries/";
const ERROR = `Error @ actions/`;

// GET /countries
export const showCountries = () => {
  return async function (dispatch) {
    try {
      const countries = await axios.get(`${PATH}`);
      return dispatch({
        type: GET_COUNTRIES,
        payload: countries.data,
      });
    } catch (e) {
      console.error(`${ERROR}showCountries --> ${e}`);
    }
  };
};

// GET COUNTRY DETAILS
export const getCountryDetails = (id) => {
  return async function (dispatch) {
    try {
      const details = await axios.get(`${PATH}${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: details.data,
      });
    } catch (e) {
      console.error(`${ERROR}getCountryDetails --> ${e}`);
    }
  };
};

// GET COUNTRIES BY NAME
export const getCountryName = (name) => {
  return async function (dispatch) {
    try {
      const countryName = await axios.get(`${PATH}?name=${name}`);
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: countryName.data,
      });
    } catch (e) {}
  };
};

// // FILTER BY CONTINENT
// export const filterCountries = (payload) => {
//   return {
//     type: FILTER_BY_CONTINENT,
//     payload,
//   };
// };

// // FILTER BY ACTIVITY
// export const filterByActivity = (payload) => {
//   return {
//     type: FILTER_BY_ACTIVITY,
//     payload,
//   };
// };

// GENERAL FILTER
export const filter = (payload) => {
  return {
    type: FILTER,
    payload,
  };
};

// ORDER ALPHABETICALLY
export const orderAlphabetically = (payload) => {
  return {
    type: ORDER_ALPHABETICALLY,
    payload,
  };
};

// ORDER BY POPULATION
export const orderByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
};

// CLEAR FILTERS

// PAGING
export const paging = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};
