import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {

  const [cart, setCart] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cart", {
          headers: { Authorization: token }
        });
        setCart(res.data);
      } catch (error) {
        console.log("Error fetching cart");
      }
    };
    fetchCart();
  }, [token]);

  const checkout = async () => {

 const token = localStorage.getItem("token");

 try {

  await axios.post(
   "http://localhost:5000/api/orders/checkout",
   {},
   {
    headers: { Authorization: token }
   }
  );

  alert("Order placed successfully");

 } catch (error) {

  console.log("Checkout error");

 }

};

  return (
    <div>
      <h2>Your Cart</h2>
      {cart && cart.products.length > 0 ? (
        cart.products.map((item) => (
          <div key={item.product._id}>
            <h3>{item.product.name}</h3>
            <p>${item.product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={checkout}>Checkout</button>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;