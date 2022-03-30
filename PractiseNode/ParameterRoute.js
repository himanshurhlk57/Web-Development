Route Parameters 

The variable parts of the route that may change value 

localhost:3000/blogs/:id
localhost:3000/blogs/12345  -> route paramter

extract route paramater from the url

i want to try and find a single document in the database with 
this id 

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  // retrieve the document with this id from the database
  Blog.findById(id)
  .then(result => {
    res.render('details', {blog: result, title: 'Blog Details'})
  })
  .catch(err => {
    console.log(err)
  }) 
})
