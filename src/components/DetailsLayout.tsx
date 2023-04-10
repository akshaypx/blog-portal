import React from "react";
import ImageBanner from "./ImageBanner";
import { usePostStore } from "../store/postStore";
import PostDetails from "./PostDetails";
import DetailsMenu from "./DetailsMenu";
import EditedInfo from "./EditedInfo";

const DetailsLayout = () => {
  const post = usePostStore((state) => state.Post);
  return (
    <div className="container">
      <div className="row p-2 mx-auto">
        <div className="col-md-8 col-sm-12 m-2 mx-auto ">
          {post?.imgUrl !== "" ? (
            <div
              className=" d-flex align-items-center w-100 rounded"
              style={{ overflow: "hidden", height: "200px", width: "100%" }}
            >
              <ImageBanner imgUrl={post?.imgUrl} />
            </div>
          ) : (
            <></>
          )}
          <PostDetails />
        </div>
        <div className="col-md-4 col-sm-12 m-2 mx-auto text-light">
          <DetailsMenu />
          <EditedInfo />
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
