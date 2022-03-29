2 -> Returning html pages

const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  // console.log("request made");

  //setHeaderContentType
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  if (req.url === "/") {
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url === "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else {
    path += "404.html";
    res.statusCode = 404;
  }

  // read the html file and then send that file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, "localhost", () => {
  console.log("listening for request on port 3000");
});





1 -> sendback plain html text

const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  console.log("request made");

  //setHeaderContentType
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello, Nodejs");
  res.end();
});

server.listen(port, "localhost", () => {
  console.log("listening for request on port 3000");
});



Response header give the browser a little bit information about what
kind of response coming back to it 
what type of data we are sending back to the browser is it 
plain text, html file, json etc
