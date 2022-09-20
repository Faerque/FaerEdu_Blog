import {
  AUTHORNAMECHANGED,
  AUTHORIMGCHANGED,
  TAGCHANGED,
  SEARCH,
} from './actionType';

export const authorNameChanged = (name) => {
  return {
    type: AUTHORNAMECHANGED,
    payload: name,
  };
};

export const authorImgChanged = (img) => {
  return {
    type: AUTHORIMGCHANGED,
    payload: img,
  };
};
export const tagChanged = (tag) => {
  return {
    type: TAGCHANGED,
    payload: tag,
  };
};
export const search = (name) => {
  return {
    type: SEARCH,
    payload: name,
  };
};
