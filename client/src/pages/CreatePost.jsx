import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../components/Editor";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createNewPost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    const response = await fetch(`${process.env.REACT_APP_API}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="post-scroll">
      <div className="main-content">
        <form onSubmit={createNewPost}>
          <input
            type="title"
            placeholder="Title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            required
          />
          <input
            type="summary"
            placeholder="Summary"
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
            required
          />
          <input
            type="file"
            onChange={(ev) => setFiles(ev.target.files)}
            required
          />
          <Editor value={content} onChange={setContent} />
          <button style={{ marginTop: "5px" }}>Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
