import { GET_ACTIVITIES } from "../actions/actionTypes";

const initialState = {
  activities: [],
  //   activities: { all: [], loaded: false },
  //   newActivity: { created: false, info: "", error: "" },
  //   newActivityLoading: false,
};

export default function activities(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    default:
      return { ...state };
  }
}
