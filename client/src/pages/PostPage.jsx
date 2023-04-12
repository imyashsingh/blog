import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/post/${id}`)
      .then((response) => response.json())
      .then((postInfo) => setPostInfo(postInfo));
    // eslint-disable-next-line
  }, []);
  console.log(postInfo);
  return <div>PostPage</div>;
};

export default PostPage;
