import axios from "axios";
import { GET_ACTIVITIES } from "./actionTypes";

const PATH = "http://localhost:3001/";
const ERROR = `Error @ actions/`;

// GET /activities
export const showActivities = () => {
  return async function (dispatch) {
    try {
      const activities = await axios.get(`${PATH}activities`);
      return dispatch({
        type: GET_ACTIVITIES,
        payload: activities.data,
      });
    } catch (e) {
      console.error(`${ERROR}showActivities --> ${e}`);
    }
  };
};

// GET ACTIVITY DETAILS

// CLEAR FILTERS
