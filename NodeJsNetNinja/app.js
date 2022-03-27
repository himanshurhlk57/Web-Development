const express = require("express");
const app = express();

//**Ejs **/
// we want to use ejs as view engine of our choice
//now its know that ejs is gonna be used to create our templates

// easier then send file method and then specifying the route
app.set("view engine", "ejs");
// app.set('views', 'myview')

app.listen(3000);

// cutsom middleware -> this gonna fire for every single request because it is at the top
// after express run this code right here it doesnt know what to do next

// app.use((req, res) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
// });

// to stop hanging our browser from loading and say express to that we finished inside move to next log

app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
