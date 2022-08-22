import countries from "./countries";
import activities from "./activities";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ countries, activities });

export default rootReducer;
