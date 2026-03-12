import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />
        
        <Route path="/cart" element={<Cart />} />

      </Routes>

    </Router>

  );

}

export default App;