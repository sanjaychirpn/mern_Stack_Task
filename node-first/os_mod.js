// The node:os module provides operating system-related utility methods and properties. It can be accessed using:
const os = require("os");

var free_m = os.freemem();
var total_mem = os.totalmem();

// Total Memory
console.log(`Total Memory: ${total_mem}`);

// Free Memory
console.log(`Free Memory: ${free_m}`);

// Platform
console.log(os.platform());

// Architecture
console.log("Architechture: ", os.arch());

// CPU Core info
console.log("CPU Info", os.cpus());
