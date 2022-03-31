connect our application

copy the link from atlas and go to app file

mongoose to connect and interact with database

mongoose wraps the standard mongodb api and it provides us with much easier way to connect 
to and communicate with the database

it allow us to create simple data models which have database query method to create get delete
and update database document

under the hood mongoose does all the heavy lifting for us

our server shouldn't listen to request before it connect to db
we should listen to request after the connection is made between server and db

schema is the thing that gonna define the structure of the documents that we are gonna later store
inside a collection
it is the thing that model wraps around

//connect to mongoDb
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

// create a model based on the upper schema

schema is the thing that defines the structure of our documents
model is the things that surrounds that and then provide us with an interface by which
to communicate with a database collection for that document type

//store the model 
its gonna pularlize Blog into Blogs and then look for that colllection inside the database
whenever we use this model in the future to communicate with the database

here collection name is Blogs

const Blog = mongoose.model('Blog', blogSchema);

// now we have different method on Blog

export this model to use this in different file 

module.exports = Blog;

// getting and save data 
we have blog model here lets try using this in the code to interact with the database

in app.js

when we get the instance of Blog modal in modal we have save method to save to the database
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

under the hood mongoose say new Blog we used Blog modal therefore i am going to 
looks for blogs collection based on the name (blog) and take the document blog = new Blog 
we have created with the information and i am gonna save it to the blogs collection

once mongoose save it to the database the database then send us back an object version of 
that new document 
        

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



Model
Models are classes compiled from Schema definitions. An instance of a model is called a document.

Models are responsible for creating and reading documents from the underlying MongoDB database.

Creating a model is pretty easy once we have the schema.

const Blog = mongoose.model('Blog', blogSchema);
The first argument is the singular name of the collection your model is for.
Mongoose automatically looks for the plural, lowercased version of your model name.
Thus, for the example above, the model Blog is for the blogs collection in the database.

We can now use the above model to create a Document object like this:












NoSql data make use of collection and documents

NoSql databases are split in collection(more like table in sql databases)

Each collection can be use to store a particular type of data

So the blog collection will only store blog document

Each collection should contain only one type of document

document represent single item of data

From our code we can connect to a collection like a blogs in the
mongodb so we can either save update delete documents inside it

Mongoose

Mongoose is an ODM library - Object Document Mapping library

Mongoose -
user model -> User.get(), User.findById()
Blog model -> Blog.deleteOne()

The way we generally work with monogDB and mongoose is to create schemas and models 

Schemas -> Defines the structure of a type of data/document properties & property types


user schema:                      Blog schema
name(String), required            title(string), required
age(number)                       ...
bio(String), required              ..

Models -> Allow us to communicate with database collections

Blog Schema -> get, save, delete, etc  -> Database Blog Collection

npm install mongoose

Blogs - collection, 

We're using the model to create a new instance of a blog document withing the code and in here we pass an object with the different properties of this blog,
Inside our schema each blog have a title which is a string a snippet which is a string and also a body which is a string
we dont have to pass this mongoose automatically takes care of the timestamps for us 

underthe hood mongoose is gonna say okay we have used the blog model therefore i am going to look for blogs collection
based on this name and
