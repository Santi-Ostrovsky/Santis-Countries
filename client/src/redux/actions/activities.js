import axios from "axios";
import {
  GET_ACTIVITIES,
  GET_ACTIVITY_DETAILS,
  CREATE_ACTIVITY,
} from "./actionTypes";

const PATH = "http://localhost:3001/activities/";
const ERROR = `Error @ actions/`;

// GET /activities
export const showActivities = () => {
  return async function (dispatch) {
    try {
      const activities = await axios.get(`${PATH}`);
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
export const getActivityDetails = (id) => {
  return async function (dispatch) {
    try {
      const details = await axios.get(`${PATH}${id}`);
      return dispatch({
        type: GET_ACTIVITY_DETAILS,
        payload: details.data,
      });
    } catch (e) {
      console.error(`${ERROR}getActivityDetails --> ${e}`);
    }
  };
};

// CREATE ACTIVITY
export const createActivity = (activity) => {
  return async function (dispatch) {
    try {
      const newActivity = await axios.post(PATH, activity);
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: newActivity,
      });
    } catch (e) {
      console.error(`${ERROR}createActivities --> ${e}`);
    }
  };
};

// CLEAR FILTERS
