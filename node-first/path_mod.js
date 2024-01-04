// The node:path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require("path");

// Create path object
var pathObj = path.parse(__filename);
console.log(pathObj);

// Path name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// Exetension name
console.log(path.extname(__filename));

// console.log(process);
