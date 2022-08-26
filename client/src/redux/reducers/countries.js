import {
  GET_COUNTRIES,
  GET_DETAILS,
  GET_COUNTRY_BY_NAME,
  FILTER,
  ORDER_ALPHABETICALLY,
  ORDER_BY_POPULATION,
} from "../actions/actionTypes";

export const initialState = {
  allCountries: [],
  countries: [],
  details: [],
  page: 1,
};

export default function countries(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    //
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
        countries: payload,
      };
    //
    case GET_DETAILS:
      return {
        ...state,
        details: payload,
      };
    //
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: payload,
      };
    //
    case FILTER:
      let { byContinents, byActivities } = payload;

      let allCountries = [...state.allCountries];

      if (byContinents && byContinents !== "All")
        allCountries = allCountries.filter((c) => c.continent === byContinents);

      if (byActivities && byActivities !== "All")
        allCountries = allCountries.filter((c) => {
          const activities = c.activities.filter((a) => {
            return a.name === byActivities;
          });
          return activities.length && activities;
        });

      return {
        ...state,
        countries: allCountries,
      };
    //
    case ORDER_ALPHABETICALLY:
      if (payload === "All") {
        return {
          ...state,
          countries: [...state.allCountries],
        };
      }

      let currentCountries;
      const aux = [...state.countries];
      if (payload === "A → Z") {
        aux.sort((a, b) => (a.name < b.name ? -1 : 1));
        currentCountries = aux;
      }
      if (payload === "Z → A") {
        aux.sort((a, b) => (a.name > b.name ? -1 : 1));
        currentCountries = aux;
      }
      return {
        ...state,
        countries: currentCountries,
      };
    //
    case ORDER_BY_POPULATION:
      if (payload === "All") {
        return {
          ...state,
          countries: [...state.allCountries],
        };
      }

      let currentCountries2;
      const aux2 = [...state.countries];
      if (payload === "HIGHER") {
        aux2.sort((a, b) => (a.population < b.population ? -1 : 1));
        currentCountries2 = aux2;
      }
      if (payload === "LOWER") {
        aux2.sort((a, b) => (a.population > b.population ? -1 : 1));
        currentCountries2 = aux2;
      }
      return {
        ...state,
        countries: currentCountries2,
      };
    //
    default:
      return { ...state };
  }
}
