import React from "react";
import { useDispatch } from "react-redux";
import {
  authorNameChanged,
  authorImgChanged,
  tagChanged,
} from "../redux/blogFilters/action";

export default function Blog({ blog }) {
  const {
    id,
    name,
    authorName,
    authorImg,
    thumbImg,
    date,
    duration,
    category,
  } = blog;
  const dispatch = useDispatch();
  const handleAuthorNameChanged = (name) => {
    dispatch(authorNameChanged(name));
  };
  const handleAuthorImgChanged = (img) => {
    dispatch(authorImgChanged(img));
  };
  const handleTagChanged = (tag) => {
    dispatch(tagChanged(tag));
  };

  return (
    <section>
      {/* <!-- single card  --> */}
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={thumbImg} alt="" />
        </div>

        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <button onClick={() => handleTagChanged(category)}>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {category}
                </span>
              </button>
            </p>
            <a href="#" className="block mt-1">
              <p className="text-xl font-semibold text-gray-900">{name}</p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <button onClick={() => handleAuthorImgChanged(authorImg)}>
                <img
                  className="h-10 w-10 rounded-full"
                  src={authorImg}
                  alt=""
                />
              </button>
            </div>
            <div className="ml-3">
              <button onClick={() => handleAuthorNameChanged(authorName)}>
                <p className="text-sm font-medium text-gray-900 hover:underline">
                  {authorName}
                </p>
              </button>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">{date}</time>
                <span aria-hidden="true">&middot;</span>
                <span> {duration} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
