import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

 const [orders, setOrders] = useState([]);

 const token = localStorage.getItem("token");

 useEffect(() => {

  const fetchOrders = async () => {

   const res = await axios.get(
    "http://localhost:5000/api/orders",
    {
     headers: { Authorization: token }
    }
   );

   setOrders(res.data);

  };

  fetchOrders();

 }, [token]);

 return (

  <div>

   <h2>Your Orders</h2>

   {orders.map(order => (

    <div key={order._id}>

     <p>Total: ${order.totalPrice}</p>

     <p>Status: {order.status}</p>

    </div>

   ))}

  </div>

 );

};

export default Orders;