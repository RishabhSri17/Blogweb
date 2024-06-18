import React from "react"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner"
import BlogDetails from "./BlogDetails"

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="py-3 flex flex-col gap-y-7 mb-[70px] mt-[30px] items-center justify-center ">
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? (<div>
            <p className="text-center font-bold text-3xl">No Post Found!</p>
          </div>) :
            (posts.map((post) => (
              <BlogDetails key={post.id} post={post}/>
            )))
        )
      }
    </div>
  )
};

export default Blogs;


{/* <div key={post.id}>
  <p className="text-red-700 font-bold">{post.title}</p>
  <p className="text-[10px]">
    By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
  </p>
  <p className="text-[10px]">Posted on {post.date}</p>
  <p className="text-[14px] my-[10px]">{post.content}</p>
  <div className="flex gap-x-3">
    {post.tags.map((tag, index) => {
      return <span key={index} className="text-blue-500 underline font-bold text-[12px]">#{tag}</span>
    })}
  </div>
</div> */}