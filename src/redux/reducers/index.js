import { combineReducers } from "redux";
import pizzas from "./pizzas";
import filters from "./filters";
import skills from "./skills";

const rootReducer = combineReducers({
  filters,
  pizzas,
  skills,
});

export default rootReducer;
