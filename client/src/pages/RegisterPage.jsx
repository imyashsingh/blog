import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const register = async (ev) => {
    ev.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.status === 200) {
      alert("Registration Successful");
      setRedirect(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
