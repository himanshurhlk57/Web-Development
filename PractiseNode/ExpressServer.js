node install -g nodemon
npm init
npm install express

sendback html file from express server to browser

const express = require("express");

//express app
const app = express();

//listen for request
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
