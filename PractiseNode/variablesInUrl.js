
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

app.get("/user/himanshu", (req, res) => {
  res.send("Hello Himanshu");
});

app.get("/user/ankita", (req, res) => {
  res.send("Hello Himanshu");
});

// i can write above two as generalise as

app.get("/user/:user", (req, res) => {
    res.send("Hello User:");
  });

// now for every user/any_name will return hello user
// now to know for which user query was called

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send("Hello User:");
});

// http://localhost:3000/user/himanshu
// output -> { userId: 'himanshu' }

app.get("/user/:userId", (req, res) => {
    res.send(users[req.params.userId]);
  });

// output on browserr {"firstName":"himanshu","lastName":"kumar"}
