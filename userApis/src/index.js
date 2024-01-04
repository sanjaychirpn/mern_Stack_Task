// The index File will be our entry point and have all the basic code, and it will connect all the middleware, also it starts the server.

const express = require("express");
const connectDB = require("./config");
const userRoutes = require("./routes/userRoutes");
// require("./controllers/userController");

const app = express();
app.use(express.json()); // Middleware
app.use("/api/users", userRoutes);

// Connecting to DB
connectDB(
  `mongodb+srv://dkaur2510:ho96X5Dx8OlezFzQ@cluster0.a69jeml.mongodb.net/test?retryWrites=true&w=majority`
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`);
});
