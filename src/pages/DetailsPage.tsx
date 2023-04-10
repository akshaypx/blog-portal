import React from "react";
import { usePostStore } from "../store/postStore";
import DetailsLayout from "../components/DetailsLayout";

const DetailsPage = () => {
  const post = usePostStore((state) => state.Post);

  return <DetailsLayout />;
};

export default DetailsPage;
