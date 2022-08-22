import axios from "axios";
import { GET_COUNTRIES, GET_DETAILS } from "./actionTypes";

const PATH = "http://localhost:3001/";
const ERROR = `Error @ actions/`;

// GET /countries
export const showCountries = () => {
  return async function (dispatch) {
    try {
      const countries = await axios.get(`${PATH}countries`);
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
      const details = await axios.get(`${PATH}countries/${id}`);
      //   console.log("details", details);
      return dispatch({
        type: GET_DETAILS,
        payload: details.data,
      });
    } catch (e) {
      console.error(`${ERROR}getCountryDetails --> ${e}`);
    }
  };
};

// CLEAR FILTERS
