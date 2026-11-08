// Exercise 4: Parse and Log URL Parts
// Print the following parts of the URL:
//   Hostname: localhost
//   Pathname: /users/list
//   Protocol: http:
//   Query: ?role=admin&active=true
//   Hash: #top
//
// Run: node ex4.js

const { URL } = require("url");

const urlStr = 'http://localhost:3000/users/list?role=admin&active=true#top';

// write your code here
const myURL = new URL(urlStr);

console.log("Hostname:", myURL.hostname);
console.log("Pathname:", myURL.pathname);
console.log("Protocol:", myURL.protocol);
console.log("Query:", myURL.search);
console.log("Hash:", myURL.hash);
