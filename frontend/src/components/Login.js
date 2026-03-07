import React, { useState } from "react";
import axios from "axios";

const Login = () => {

  // Store email
  const [email, setEmail] = useState("");

  // Store password
  const [password, setPassword] = useState("");

  // Store message from server
  const [message, setMessage] = useState("");

  // Function when form submitted
  const handleSubmit = async (e) => {

    e.preventDefault(); // stop page refresh

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      setMessage(res.data.message);

      localStorage.setItem("token", res.data.token);
      
      window.location.href = "/dashboard";
      
      console.log(res.data.user);

    } catch (error) {

      setMessage(error.response.data.message);

    }

  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />

        <button type="submit">Login</button>

      </form>

      <p>{message}</p>

    </div>
  );
};

export default Login;