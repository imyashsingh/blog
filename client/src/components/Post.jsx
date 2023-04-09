import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://miro.medium.com/v2/resize:fit:828/0*7o1nPtr260CgeJ-Z"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>AI and the American Smile</h2>
        <p className="info">
          <a href="temp" className="author">
            fake name
          </a>
          <time>01-01-2023 16:37:57</time>
        </p>
        <p className="summary">
          Imagine a time traveler journeyed to various times and places
          throughout human history and showed soldiers and warriors of the
          periods what a “selfie” is
        </p>
      </div>
    </div>
  );
}

export default Post;
