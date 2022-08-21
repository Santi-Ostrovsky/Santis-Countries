const initialState = { countries: [] };

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: payload,
      };
    default:
      return { ...state };
  }
}
