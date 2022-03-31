import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

module.exports = mongoose.model('Blog', blogSchema);
Here, we are exporting the model from this file.

The model can be imported in any file like this:

const Blog = require('../models/blog');
Now we can use Blog to create Blog Document objects like this:

const blogDocument1 = new Blog({
  title:  "Get a Software Engineering Job/Internship - Ultimate Guide"
  author: "Gaurav Chandak",
  body:   "<div>.....</div>",
  date: Date.now(),
  hidden: false,
  meta: {
    votes: 0,
    favs:  0
  }
});

//create and insert document

const blogDoc = new Blog({
  title:  "Get a Software Engineering Job/Internship - Ultimate Guide"
  author: "Gaurav Chandak"
});

blogDoc.save()
.then(savedDoc => {
    console.log(`Saved with id: ${savedDoc.id}`);
}, err => {
    console.log(`Error in saving blog ${err}`);
});

// read document

find and findOne are used to find multiple documents and single document respectively. findById is used to find the document given an id.

Blog.find({ "author": "Gaurav Chandak" })
.then(blogs => {
    blogs.forEach(blog => {
        console.log(blog.name);
    }
}, err => {
    console.log(`Error in finding blogs ${err}`);
});

// update /delete document
