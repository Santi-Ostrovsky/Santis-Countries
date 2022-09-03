import {
  GET_ACTIVITIES,
  GET_ACTIVITY_DETAILS,
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
} from "../actions/actionTypes";
import { initialState as countries } from "./countries";

const initialState = {
  activities: [],
  allCountries: [...countries.allCountries],
  details: [],
};

export default function activities(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case GET_ACTIVITY_DETAILS:
      return {
        ...state,
        details: payload,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, payload],
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter((a) => a.id !== payload),
      };
    default:
      return { ...state };
  }
}
