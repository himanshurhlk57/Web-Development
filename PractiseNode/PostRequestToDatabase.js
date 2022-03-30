
  <form action="/blogs" method="POST">
    <label for="title">Blog Title: </label>
    <input type="text" id="title" name="title" required>
    <button>Submit</button>
  </form>

  we also want to send all of these data and attach it 
  to the body of the post request so that we can access that
  on the server
  for that we need to add name attribute to these input field

  lets handle that on the server
  in the app.js and save in the database 
  
  need to use a middleware comes with express
// for expecting form data 
  app.use(express.urlencoded({extended: true}))

  app.post('/blogs', (req, res) => {
    // new instance of Blog model
    const blog = new Blog(req.body)
    blog.save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err)
    })
  })
