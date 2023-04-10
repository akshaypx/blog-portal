import React from "react";

const DetailsMenu = () => {
  return (
    <>
      <div className="card text-center text-bg-dark mb-4">
        <div className="card-header">Admin Panel</div>
        <div className="card-body">
          <button className="btn btn-outline-light w-100 mb-3">
            Edit Post
          </button>
          <button className="btn btn-outline-light w-100 mb-3">
            Delete Post
          </button>
          <button className="btn btn-outline-light w-100">
            Show Edited Info
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsMenu;
