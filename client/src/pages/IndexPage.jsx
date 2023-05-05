import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { HOST } from "../host";
import logo from "../assets/Loading_icon.gif";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetchData();
    console.log(posts);
    // eslint-disable-next-line
  }, [skip]);
  const fetchData = async () => {
    await fetch(`${HOST}/post?skip=${skip}`)
      .then((response) => response.json())
      .then((post) => setPosts([...posts, ...post]));
  };

  const handleScroll = (ev) => {
    const { offsetHeight, scrollTop, scrollHeight } = ev.target;
    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(posts?.length);
    }
  };

  return (
    <div onScroll={handleScroll} className="post-scroll">
      <div className="main-content">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Post key={`${index}+${post._id}`} {...post} />
          ))
        ) : (
          <div id="load-container">
            <img id="loading" src={logo} alt="loading..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
