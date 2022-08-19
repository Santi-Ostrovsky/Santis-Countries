const initialState = {};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return { ...state };
  }
}
