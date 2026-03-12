const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");


// Checkout
router.post("/checkout", authMiddleware, async (req, res) => {

 const userId = req.user.id;

 try {

  const cart = await Cart.findOne({ user: userId }).populate("products.product");

  if (!cart || cart.products.length === 0) {
   return res.status(400).json({ message: "Cart is empty" });
  }

  let totalPrice = 0;

  cart.products.forEach(item => {
   totalPrice += item.product.price * item.quantity;
  });

  const order = new Order({
   user: userId,
   products: cart.products,
   totalPrice
  });

  await order.save();

  // Clear cart after order
  cart.products = [];
  await cart.save();

  res.json({ message: "Order placed successfully", order });

 } catch (error) {

  res.status(500).json({ message: "Checkout error" });

 }

});


// Get User Orders
router.get("/", authMiddleware, async (req, res) => {

 try {

  const orders = await Order.find({ user: req.user.id })
   .populate("products.product");

  res.json(orders);

 } catch (error) {

  res.status(500).json({ message: "Error fetching orders" });

 }

});


module.exports = router;