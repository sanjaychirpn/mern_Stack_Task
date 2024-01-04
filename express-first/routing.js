const express = require("express");
const app = express();

// Creating a basic routing app for learning purpose

// use() for all the requests
// app.use((req, res) => {
//   console.log("Our Common Respose");
// });

// handling get request
app.get("/cats", (req, res) => {
  res.send("<h1>Meow!</h1>");
});

app.get("/dogs", (req, res) => {
  res.send("<h1>Woof!</h1>");
});

// And for all routes in a get we use *
app.get("*", (req, res) => {
  res.send("Dont recognise this path!");
});

app.listen(8080, () => {
  console.log("We are listning to port 8080 now!");
});
