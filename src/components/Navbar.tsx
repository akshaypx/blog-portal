import React from "react";
import { usePostStore } from "../store/postStore";
import { useUserStore } from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  showSearch: string;
}
const Navbar = ({ showSearch }: NavbarProps) => {
  const { searchWord, setSearchWord } = usePostStore((state) => ({
    searchWord: state.searchWord,
    setSearchWord: state.setSearchWord,
  }));
  const User = useUserStore((state) => state.User);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    //remove user
    logoutUser();
    navigate("/login", { replace: true });
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {User?.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {showSearch === "on" ? (
            <form className="d-flex my-2" role="search">
              <input
                className="form-control me-2 bg-dark bg-dark-outline outline-dark text-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearchWord(e.target.value.toString());
                }}
              />
              {/* <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            </form>
          ) : (
            <></>
          )}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addpost">
                Add Post
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Newest
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Oldest
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Remove X
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/master">
                Master Portal
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <button onClick={handleLogout} className="btn btn-dark">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
