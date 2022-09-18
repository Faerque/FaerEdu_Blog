import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import blogDataReducer from "./blogData/reducer";

const store = createStore(blogDataReducer, composeWithDevTools());

export default store;
