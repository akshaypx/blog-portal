import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { usePostStore } from "../store/postStore";

const Home = () => {
  const { posts, searchWord, loading, fetchPosts } = usePostStore((state) => ({
    posts: state.PostsList,
    searchWord: state.searchWord,
    loading: state.loading,
    fetchPosts: state.fetchPosts,
  }));

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar showSearch="on" />
      <Layout>
        {loading ? (
          <div className="text-light">Loading...</div>
        ) : (
          <>
            {posts
              .filter(
                (post) =>
                  post.title.toLowerCase().includes(searchWord) ||
                  post.desc.toLowerCase().includes(searchWord)
              )
              .map((post) => (
                <Card
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  desc={post.desc}
                  imgUrl={post.imgUrl}
                  time={post.dateTime}
                  author={post.author}
                />
              ))}
          </>
        )}
      </Layout>
    </>
  );
};

export default Home;
