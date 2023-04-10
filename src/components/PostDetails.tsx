import React from "react";
import { usePostStore } from "../store/postStore";

const PostDetails = () => {
  const post = usePostStore((state) => state.Post);
  return (
    <>
      <h2 className="text-light my-3">{post?.title}</h2>
      <h6 className="text-secondary">
        posted by {post?.author}, {post?.dateTime}
      </h6>
      <div className="text-light my-3">
        <p>{post?.desc}</p>
      </div>
    </>
  );
};

export default PostDetails;
