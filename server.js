const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {});
const method = request.method;
const route = request.url;
const isrooturl = route === "/";

if (isrooturl) {
  fs.readFile("index.html", (error, data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
} else if (route === "/script.js") {
  fs.readFile("script.js", (err, data) => {
    response.writeHead(200, { "Content-Type": "text/javascript" });
    response.write(data);
    response.end();
  });
} else {
}
