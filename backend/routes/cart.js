const express = require("express");
const router = express.Router();

const Cart = require("../models/Cart");
const authMiddleware = require("../middleware/authMiddleware");


// Add product to cart
router.post("/add", authMiddleware, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    // Check if product already in cart
    const index = cart.products.findIndex(p => p.product.toString() === productId);

    if (index > -1) {
      cart.products[index].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.json(cart);

  } catch (error) {
    res.status(500).json({ message: "Error adding to cart" });
  }
});


// Get user cart
router.get("/", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.findOne({ user: userId }).populate("products.product");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart" });
  }
});

module.exports = router;