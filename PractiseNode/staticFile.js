All my static file is present in public folder 
if i type in the url http://localhost:3000/ it is connected to styles.css
it will give me the homepage

http://localhost:3000/about.html will give the about.html page and so on 

now if i type http://localhost:3000/about

because we have not mentioned about.html so it will look for /about route because it is 
present so it will return the about page

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/about", (req, res) => {
  res.sendFile("./public/about.html", { root: __dirname });
});
