import React from "react";

const MasterLayout = () => {
  return (
    <div className="container mt-4">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col-md-2 col-sm-8 mb-3 text-light">
          <div className="list-group">
            <button
              type="button"
              className="list-group-item list-group-item-dark list-group-item-action"
            >
              Option 1
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-dark list-group-item-action"
            >
              Option 2
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-dark list-group-item-action"
            >
              Option 3
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-dark list-group-item-action"
            >
              Option 4
            </button>
          </div>
        </div>
        <div className="col-md-3 col-sm-8 mb-3 text-light">
          <div className="card text-bg-dark">
            <div className="card-header">Profile</div>
            <div className="card-body text-center">
              <img
                src="src\assets\master.png"
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <h5 className="my-2">Master Name</h5>
              <h6 className="text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                corrupti!
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-8 mb-3 text-light">
          <div className="card text-bg-dark">
            <div className="card-header">Users Data</div>
            <div className="card-body">
              <table className="table text-light">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
