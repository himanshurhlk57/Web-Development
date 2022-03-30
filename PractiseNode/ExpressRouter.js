new Folder -> routes
new route -> blogRoutes -> this will contain all the blog routes

in blogRoutes.js
cut all of the route from app file and paste in blogRoute

in blogRoute.js 

const express = require('express')

const router = express.Router();  /new instance of router object

lets replace all the app with router in blogRoute.js

in the bottom export it 

module.exports = router;

lets import in app.js

in app.js

const blogRoutes = require('./routes/blogRoutes')

lets use it in the express app
as a middleware

app.use(blogRoutes);

