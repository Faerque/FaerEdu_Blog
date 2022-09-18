import { AUTHORIMG, AUTHORNAME, CATEGORY } from "./actionType";

export const authorName = (name) => {
  return {
    type: AUTHORNAME,
    payload: name,
  };
};

export const authorImg = (img) => {
  return {
    type: AUTHORIMG,
    payload: img,
  };
};

export const category = (category) => {
  return {
    type: CATEGORY,
    payload: category,
  };
};
