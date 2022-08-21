import axios from "axios";

export const showCountries = () => {
  return async function (dispatch) {
    try {
      const countries = (await axios.get("http://localhost:3001/countries"))
        .data;
      return dispatch({
        type: "GET_COUNTRIES",
        payload: countries,
      });
    } catch (e) {
      console.error(`Error @ actions/index (13) --> ${e}`);
    }
  };
};
