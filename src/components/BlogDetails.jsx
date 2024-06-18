import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="mt-[40px] w-11/12 max-w-[650px] flex flex-col justify-center">
      <NavLink to={`/blog/${post.id}`}>
        <span className="text-red-700 font-bold">{post.title}</span>
      </NavLink>
      <p className="text-[12px]">
        By <span className="italic">{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[12px]">Posted on {post.date}</p>
      <p className="text-[14px] my-[10px]">{post.content}</p>
      <div className="flex gap-x-3">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-500 underline font-bold text-[12px]">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;