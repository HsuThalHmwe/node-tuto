const http = require("http");
const fs = require("fs");
port = 3000;
const server = http.createServer((request, response) => {
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
  } else if (route === "/data") {
    const isget = method === "GET";
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>I am Girl</h1>");
    response.end();
  } else {
    response.end();
  }
});

server.listen(port, () => {
  console.log("Server lisiten on port 3000");
});
