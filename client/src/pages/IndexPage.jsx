import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)}
    </>
  );
};

export default IndexPage;
