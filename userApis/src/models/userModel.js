// We create our model and schema here and export it; Which will be imported in the controller for database related operations
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  gender: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
