// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require("fs");
const path = require("path");

// Create a folder
fs.mkdir("test", (err) => {
  if (err) throw err;
  console.log("Folder Created");
});

// Create and write to file using writeFile - creates and writes into a new file.
fs.writeFile("test/hello.txt", "Hello World !!", (err) => {
  if (err) throw err;
  console.log("File Create !!");
});

// Create a file using open
fs.open("test/hello.txt", "r", (err, file) => {
  if (err) throw err;
  console.log("Saved!");
});

// Appending content to a file
fs.appendFile("test/hello.txt", " New text to append !!!", (err) => {
  if (err) throw err;
  console.log("File Updated !!!!!");
});

// Read a file
fs.readFile("test/hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename a file
fs.rename("test/hello.txt", "test/hello_new.txt", (err) => {
  if (err) throw err;
  console.log("File renamed !");
});
