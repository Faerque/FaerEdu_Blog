import initialState from "./initialState";
import { AUTHORIMGCHANGED, AUTHORNAMECHANGED, TAGCHANGED } from "./actionType";

const blogFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORNAMECHANGED:
      return {
        ...state,
        name: action.payload,
      };
    case AUTHORIMGCHANGED:
      return {
        ...state,
        img: action.payload,
      };
    case TAGCHANGED:
      return {
        ...state,
        tag: action.payload,
      };
    default:
      return state;
  }
};
export default blogFiltersReducer;
