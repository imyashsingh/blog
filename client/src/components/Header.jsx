import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { HOST } from "../host";

function Header() {
  const { userinfo, setUserinfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${HOST}/profile`, {
      credentials: "include",
      method: "GET",
    })
      .then((response) => response.json())
      .then((userinfo) => setUserinfo(userinfo));
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    fetch(`${HOST}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserinfo(null);
  };
  const username = userinfo?.username;
  return (
    <header>
      <div className="nav-content">
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav>
          {username ? (
            <>
              <Link to={"/create"}>Write</Link>
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
      </div>
    </header>
  );
}

export default Header;
