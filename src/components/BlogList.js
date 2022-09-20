import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from './Blog.js';
import Search from '../assets/search.svg';
import { search } from '../redux/blogFilters/action';
export default function BlogList() {
  const blogs = useSelector((state) => state.blogData);
  const filters = useSelector((state) => state.blogFilters);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const sortingByAuthorName = (blog) => {
    if (filters.authorName.length > 0) {
      return filters.authorName.includes(blog.authorName);
    } else return blog;
  };

  const sortingByAuthorImg = (blog) => {
    if (filters.authorImg.length > 0) {
      return filters.authorImg.includes(blog.authorImg);
    } else return blog;
  };

  const sortingByTag = (blog) => {
    if (filters.Tag.length > 0) {
      return filters.Tag.includes(blog.category);
    } else return blog;
  };
  const sortingByname = (blog) => {
    if (filters.search.length > 0) {
      return blog.name.toLowerCase().includes(filters.search.toLowerCase());
    }
    return blog;
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(search(input));
    setInput('');
  };

  return (
    <section>
      {/* Seraching funtcionality  */}
      <form onSubmit={submitHandler}>
        <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
          <input
            className="outline-none border-none bg-gray-50 h-full w-full mr-2"
            type="text"
            name="search"
            placeholder="Search by Name"
            value={input}
            onChange={handleInput}
          />
          <img src={Search} alt="search" className="h-5 w-5" />
        </div>
      </form>
      <div className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              ALL BLOGS ARE HERE
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          {/* Card Gird */}
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {blogs
              .filter((blog) => sortingByAuthorName(blog))
              .filter((blog) => sortingByAuthorImg(blog))
              .filter((blog) => sortingByTag(blog))
              .filter((blog) => sortingByname(blog))
              .map((blog) => (
                <Blog key={blog.id} blog={blog} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
