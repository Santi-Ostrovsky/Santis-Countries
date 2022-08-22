const initialState = {
  countries: [],
  activities: [],
  details: [],
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: payload,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: payload,
      };
    default:
      return { ...state };
  }
}
