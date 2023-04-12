import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function Header() {
  const { userinfo, setUserinfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/profile`, {
      credentials: "include",
      method: "GET",
    })
      .then((response) => response.json())
      .then((userinfo) => setUserinfo(userinfo));
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    fetch(`${process.env.REACT_APP_API}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserinfo(null);
  };
  const username = userinfo?.username;
  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username ? (
          <>
            <Link to={"/create"}>Create new Post</Link>
            {
              // eslint-disable-next-line
              <a onClick={logout}>Logout</a>
            }
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
