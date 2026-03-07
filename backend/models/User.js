const mongoose = require("mongoose");

// Define user structure (Schema)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // User must have a name
  },
  email: {
    type: String,
    required: true, // User must have email
    unique: true,   // No duplicate emails
  },
  password: {
    type: String,
    required: true, // Must have password
  },
}, { timestamps: true }); // Automatically adds createdAt & updatedAt

// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;