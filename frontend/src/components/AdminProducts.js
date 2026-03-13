import React, { useState } from "react";
import axios from "axios";

const AdminProducts = () => {

 const [name, setName] = useState("");
 const [price, setPrice] = useState("");

 const addProduct = async () => {

  const token = localStorage.getItem("token");

  try {

   await axios.post(
    "http://localhost:5000/api/products/add",
    {
     name,
     price
    },
    {
     headers: { Authorization: token }
    }
   );

   alert("Product added");

  } catch (error) {

   console.log("Error adding product");

  }

 };

 return (

  <div>

   <h2>Admin Product Panel</h2>

   <input
    placeholder="Product name"
    onChange={(e) => setName(e.target.value)}
   />

   <input
    placeholder="Price"
    onChange={(e) => setPrice(e.target.value)}
   />

   <button onClick={addProduct}>Add Product</button>

  </div>

 );

};

export default AdminProducts;