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

in the above function we get access to next also 

here i am not returning any responsing now i want to to give the /user response to other app method i need to 
to next
app.all("/users", (req, res, next) => {
  console.log('data retrived;);
  next();
});

app.get("/users", (req, res) => {
  res.send('data retrived done');
});
