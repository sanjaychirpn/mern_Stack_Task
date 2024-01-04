const express = require("express");
const app = express();
// console.log(app);
app.use((req, res) => {
  console.log("All the requests are gonna fall here!");
  // we can render html, as well as objects and accordingly the content type in headers will change
  res.send("Hey peach! We have a response for you.");
});
app.listen(3000, () => {
  console.log("On Port 3000 biteches!");
});
