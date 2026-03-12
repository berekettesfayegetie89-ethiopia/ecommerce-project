import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const addToCart = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/api/cart/add",
        {
          productId,
          quantity: 1,
        },
        {
          headers: { Authorization: token },
        },
      );
      alert("Product added to cart");
    } catch (error) {
      console.log("Error adding to cart");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/api/products");

      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>

          <p>{product.description}</p>

          <p>${product.price}</p>

          <button onClick={() => addToCart(product._id)}>Add to Cart</button>
          <button onClick={() => (window.location.href = "/cart")}>
            View Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
