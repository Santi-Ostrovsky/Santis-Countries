import axios from "axios";

const PATH = "http://localhost:3001/";
const ERROR = `Error @ actions/`;

// GET /countries
export const showCountries = () => {
  return async function (dispatch) {
    try {
      const countries = await axios.get(`${PATH}countries`);
      return dispatch({
        type: "GET_COUNTRIES",
        payload: countries.data,
      });
    } catch (e) {
      console.error(`${ERROR}showCountries --> ${e}`);
    }
  };
};

// GET /activities
export const showActivities = () => {
  return async function (dispatch) {
    try {
      const activities = await axios.get(`${PATH}activities`);
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: activities.data,
      });
    } catch (e) {
      console.error(`${ERROR}showActivities --> ${e}`);
    }
  };
};

// GET COUNTRY DETAILS
export const getCountryDetails = (id) => {
  return async function (dispatch) {
    try {
      const details = await axios.get(`${PATH}countries/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: details.data,
      });
    } catch (e) {
      console.error(`${ERROR}getCountryDetails --> ${e}`);
    }
  };
};

// CLEAR FILTERS
