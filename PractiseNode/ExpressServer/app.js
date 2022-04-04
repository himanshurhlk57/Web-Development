const express = require("express");

//express app
const app = express();

//listen for request
const port = process.env.PORT || 3000;

// app.use(express.static("public"));


const users = {
    himanshu: {
        firstName: 'himanshu',
        lastName: 'kumar'
    },
    rohit: {
        firstName: 'rohit',
        lastName: 'kumar'
    }
}

// app.get("/user/himanshu", (req, res) => {
//   res.send("Hello Himanshu");
// });

// app.get("/user/ankita", (req, res) => {
//   res.send("Hello Himanshu");
// });

// i can write above two as generalise as

// app.get("/user/:user", (req, res) => {
//     res.send("Hello User:");
//   });

// now for every user/any_name will return hello user
// now to know for which user query was called

// app.get("/user/:userId", (req, res) => {
//   console.log(req.params);
//   res.send("Hello User:");
// });

// http://localhost:3000/user/himanshu
// output -> { userId: 'himanshu' }

app.get("/user/:userId", (req, res) => {
    res.send(users[req.params.userId]);
  });

// output on browserr {"firstName":"himanshu","lastName":"kumar"}




// app.get("/", (req, res) => {
//   res.sendFile("./public/index.html", { root: __dirname });
// });

// app.get("/about", (req, res) => {
//   res.sendFile("./public/about.html", { root: __dirname });
// });

// //redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("./about");
// });

// app.use((req, res) => {
//   res.status(404).sendFile("./public/404.html", { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
