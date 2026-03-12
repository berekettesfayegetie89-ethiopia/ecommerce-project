import React from "react";
import Products from "./Products";
import Orders from "./Orders";

const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Welcome to your account.</p>

      <button onClick={logout}>Logout</button>
      <hr/>

      <Products />

      <Orders />
    </div>
  );
};

export default Dashboard;
