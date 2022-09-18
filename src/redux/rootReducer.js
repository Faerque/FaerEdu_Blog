import { combineReducers } from "redux";
import blogDataReducer from "./blogData/reducer";

const rootReducer = combineReducers({
  blogData: blogDataReducer,
});

export default rootReducer;
