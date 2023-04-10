import React from "react";

const AddForm = () => {
  return (
    <div className="container col-sm-6 d-flex flex-column align-items-center justify-content-center text-light">
      <h3 className="my-4">Add Post</h3>
      <div className="w-100">
        <form action="">
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Title
            </label>
            <input type="text" className="form-control bg-dark text-light" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <textarea className="form-control bg-dark text-light" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Image
            </label>
            <input type="file" className="form-control bg-dark text-light" />
          </div>
          <div className="mb-3">
            <button className="btn btn-dark">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
