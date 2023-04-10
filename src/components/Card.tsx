import React from "react";
import { usePostStore } from "../store/postStore";
import { useNavigate } from "react-router-dom";

interface CardProps {
  time: string;
  title: string;
  imgUrl: string;
  desc: string;
  author: string;
  id: number;
}

const Card = ({ time, title, imgUrl, desc, author, id }: CardProps) => {
  const fetchPost = usePostStore((state) => state.fetchPost);
  const navigate = useNavigate();
  const handleClick = async () => {
    await fetchPost(id).then(() => navigate("/posts/" + id));
  };
  if (imgUrl !== "") {
    return (
      <div className="col">
        <div
          className="card text-bg-dark p-0"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <div className="card-header text-secondary">{author}</div>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imgUrl} className="img-fluid card-image" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title.substring(0, 20)}...</h5>
                <p className="card-text">{desc.substring(0, 20)}...</p>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary text-secondary">
                {time}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col">
      <div
        className="card text-bg-dark"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <div className="card-header text-secondary">{author}</div>
        {/* <img src={imgUrl} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 20)}...</h5>
          <p className="card-text">{desc.substring(0, 20)}...</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary text-secondary">{time}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
