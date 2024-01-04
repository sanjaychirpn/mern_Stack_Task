// Creating server using http

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.write("Hello There!!");

    res.end();
    console.log("url is: ", req.url);
    console.log("Parsed url: ", url.parse(req.url));
    console.log("String parameter is: ", url.parse(req.url, true).search);
  })
  .listen(3000);
