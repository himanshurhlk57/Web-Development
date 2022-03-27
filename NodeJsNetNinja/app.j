// this returns us a function we setting it to express

const express = require("express");

// all we are doing is that we are invoking that function and storing the instance of that in app
const app = express();


// lets listen for requests

// this return us the instance of the server
// we set up the express app and now we are listenig for the request at port 3000
app.listen(3000);

// response to the request like type of get post or something else
// listen for the request at which path

app.get("/", (req, res) => {
  // send automaticaly set the content type header also we donot need to manually set the status code
  // res.send('<h1>Hello from express app bolega re sorry bhai chup sala ok</h1>');
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404 page
// express is going to scan this module from top down as soon as it encounter the respective route to send to the webpage it stops
//searching for the routes below if till the end it doesnot find the respective route then in that case use will be excuted and send the 404 page
// use - use this function for every incoming request

app.use((req, res) => {
  // in this case we need to manually set the 404 error
  // res.sendFile("./server/views/404.html", { root: __dirname });
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
