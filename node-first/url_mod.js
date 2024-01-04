const url = require("url");
const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized url: href and toString method, either can be used to get the serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host name
console.log(myUrl.host);

// Host name
// both host and hostname returns the same domain name but the difference is that hostname method does not work with ports or does not get the port name
console.log(myUrl.hostname);

// Query
console.log(myUrl.search);

// PArams Object
console.log(myUrl.searchParams);
