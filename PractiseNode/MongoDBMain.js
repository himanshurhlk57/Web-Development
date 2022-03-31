const dataBaseUri = 'String';
npm install mongoose

const mongoose  = require('mongoose')
mongoose.connect(dataBaseUri)   //asynchronous task takes little bit time but after sometime we get connected to db
  .then((result) => app.listen(3000)) 
  .catch((err) => console.log(err))



// create new folder for models and schema for blog
blog.js ->
const mongoose = require('mongoose')
const Schema = mongoose.Schema; 
//below object can describe the structure of the document that we want to store in our blog collection
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
   body: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

in app.js

const Blog = require('./models/blog')
app.get('/add-blog' (req, res) => {
  const blog = new Blog({
  title: 'new blog',
  snippet: 'about my new blog',
  body: 'more about my new blog'
})
// savein the databse
blog.save()
  .then((result) => {
  res.send(result)
})
  .catch((err) => {
  console.log(err)
})
})


// get all blogs
//use blog model to get all the document from this collection
app.get('/all-blogs' (req, res) => {
   Blog.find()
  .then((result) => {
     res.send(result)
   })
   .catch((err) => {
  console.log(err)
})
})
// display data from the database to the ui
// result is an array of blog
app.get('/blogs', (req, res) => { 
  Blog.find().sort({createdAt: -1})  // newest to oldest
    .then((result) => {
     res.render('index', {title: 'All Blogs', blogs: result})
   })
   .catch((err) => {
  console.log(err)
})
})


const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Himanshu";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open",  () => {
  console.log("connected to db");
});



Model
Models are classes compiled from Schema definitions. An instance of a model is called a document.
Models are responsible for creating and reading documents from the underlying MongoDB database.
Creating a model is pretty easy once we have the schema.
const Blog = mongoose.model('Blog', blogSchema);
The first argument is the singular name of the collection your model is for.
Mongoose automatically looks for the plural, lowercased version of your model name.
Thus, for the example above, the model Blog is for the blogs collection in the database.
We can now use the above model to create a Document object like this:
