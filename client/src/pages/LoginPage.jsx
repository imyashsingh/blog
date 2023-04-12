import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserinfo } = useContext(UserContext);

  const login = async (ev) => {
    ev.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserinfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  };

  return (
    <>
      {redirect ? (
        <Navigate to={"/"} />
      ) : (
        <form className="login" onSubmit={login}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default LoginPage;
