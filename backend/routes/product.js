const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");


// Add Product
router.post("/add", authMiddleware, adminMiddleware, async (req, res) => {

  try {

    const product = new Product(req.body);

    await product.save();

    res.json({ message: "Product added successfully", product });

  } catch (error) {

    res.status(500).json({ message: "Error adding product" });

  }

});

router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {

 try {

  await Product.findByIdAndDelete(req.params.id);

  res.json({ message: "Product deleted successfully" });

 } catch (error) {

  res.status(500).json({ message: "Error deleting product" });

 }

});


// Get All Products
router.get("/", async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({ message: "Error fetching products" });

  }

});


module.exports = router;