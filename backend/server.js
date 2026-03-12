const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/user");

app.use("/api/user", userRoutes);

const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes);

const cartRoutes = require("./routes/cart");

app.use("/api/cart", cartRoutes);

const orderRoutes = require("./routes/order");

app.use("/api/orders", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
