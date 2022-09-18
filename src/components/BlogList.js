import React from "react";
import { useSelector } from "react-redux";
import Blog from "./Blog.js";
export default function BlogList() {
  const blogs = useSelector((state) => state.blogData);

  return (
    <>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id}></Blog>
      ))}
    </>
  );
}
