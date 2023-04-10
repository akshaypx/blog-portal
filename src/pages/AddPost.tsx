import React from "react";
import Navbar from "../components/Navbar";
import AddForm from "../components/AddForm";

const AddPost = () => {
  return (
    <>
      <Navbar showSearch="off" />
      <AddForm />
    </>
  );
};

export default AddPost;
