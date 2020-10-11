const http = require("http");

http.createServer((req, res) => res.end(`Hello World.  ${Date.now()}`)).listen(80);
