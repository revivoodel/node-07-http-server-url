// Exercise 1: Return a fixed text
// Goal: create a server that always answers:
//   Hello from Node Server!
// regardless of the request (any path, any method).
//
// Run: node ex1.js   and open http://localhost:3000

const http = require("http");

// write your code here (create the server and call server.listen(3000))
http.createServer((req, res) => {
    console.log("Request received");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node Server!");
}).listen(3000);