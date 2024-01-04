const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Creating  connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://dkaur2510:ho96X5Dx8OlezFzQ@cluster0.a69jeml.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// Call the function to connect to MongoDB
connectDB();

// creating a schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// Creating a modal
const Movie = mongoose.model("Movie", movieSchema);

// Create Movies Api
app.post("/movies", async (req, res) => {
  const newItem = new Movie(req.body);
  await newItem.save();
  res.send(newItem);
});

// Read Movies Api
app.get("/movies", async (req, res) => {
  const getmovies = await Movie.find();
  res.send(getmovies);
});

// Updating Movies Api
app.put("/movies/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
      return res.status(400).json({ error: "Invalid Movie ID!!" });
    }

    const resp = await Movie.findByIdAndUpdate(movieId, req.body, {
      new: true,
    });

    res.status(200).json({ success: "Updates Successfully!!", resp: resp });
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).json({ error: "Intermal Server Error!!" });
  }
});

// Delete Movies Api
app.delete("/movies/:id", async (req, res) => {
  try {
    const movieId = req.params.id;

    // Check if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
      return res.status(400).json({ error: "Invalid movie ID" });
    }

    await Movie.findByIdAndDelete(movieId);
    res.send("Deleted Successfully");
  } catch (err) {
    console.error("Error: ", err);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
});

app.listen(8080, (err) => {
  if (err) throw err;
  console.log("Server Running");
});

// Creating a Document with data
// const movieItem = new Movie({
//   title: "Animal",
//   year: 2023,
//   score: 7.3,
//   rating: "A",
// });

// Saving the data
// movieItem.save();
// console.log("Data Saved!");
