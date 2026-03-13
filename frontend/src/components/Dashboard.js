import React from "react";
import Products from "./Products";
import Orders from "./Orders";
import AdminProducts from "./AdminProducts";

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
      <AdminProducts />
    </div>
  );
};

export default Dashboard;
