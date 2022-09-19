import initialState from "./initialState";
import { AUTHORIMGCHANGED, AUTHORNAMECHANGED, TAGCHANGED } from "./actionType";

const blogFiltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORNAMECHANGED:
      return {
        ...state,
        authorName: action.payload,
      };
    case AUTHORIMGCHANGED:
      return {
        ...state,
        authorImg: action.payload,
      };
    case TAGCHANGED:
      return {
        ...state,
        Tag: action.payload,
      };
    default:
      return state;
  }
};
export default blogFiltersReducer;
