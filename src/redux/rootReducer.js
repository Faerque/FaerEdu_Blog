import { combineReducers } from "redux";
import blogDataReducer from "./blogData/reducer";
import blogFiltersReducer from "./blogFilters/reducer";

const rootReducer = combineReducers({
  blogData: blogDataReducer,
  blogFilters: blogFiltersReducer,
});

export default rootReducer;
