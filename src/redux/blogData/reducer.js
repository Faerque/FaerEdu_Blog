import initialState from "./initialState";
import { AUTHORIMG, AUTHORNAME, CATEGORY } from "./actionType";

const blogDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORNAME:
      return {
        ...state,
        authorName: action.payload,
      };
    case AUTHORIMG:
      return {
        ...state,
        authorImg: action.payload,
      };
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
export default blogDataReducer;
