const initialState = {
  countries: [],
  activities: [],
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
    default:
      return { ...state };
  }
}
