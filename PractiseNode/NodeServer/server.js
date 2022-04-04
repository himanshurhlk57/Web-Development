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
