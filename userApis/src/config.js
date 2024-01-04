// We Connect our database here and export the connection method; which will be called in index.js

const mongoose = require("mongoose");

const connectDB = async (urlStr) => {
  try {
    const conn = await mongoose.connect(urlStr);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error!!", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
