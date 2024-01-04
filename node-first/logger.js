// Creating and Loading our Module
// console.log(module);
// Module here is an object

var url = "http://mylogger.io/log";

function log(message) {
  // Send an http request
  console.log(message);
}

// This variable and function, they are both scoped to this module i.e. they are both private.
// to call it from outside or another module (like app.js), we need to export it.

module.exports.log_outside = log;
