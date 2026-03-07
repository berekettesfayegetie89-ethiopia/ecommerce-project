import React from "react";

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

    </div>

  );

};

export default Dashboard;