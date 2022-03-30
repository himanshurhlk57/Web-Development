
Name for the function or code which runs on the server between getting a
request and sending a response

// our own middleware 

app.use((req, res) => {
  console.log('new request made: ');
   console.log('host: ', req.hostname);
   console.log('path: '. req.path);
   console.log('method: ', req.method);
}):

this will hang the browser so after express run this code it doesn't know what to do next

app.use((req, res, next) => {
  console.log('new request made: ');
   console.log('host: ', req.hostname);
   console.log('path: '. req.path);
   console.log('method: ', req.method);
  next();   // we finished inside this middleware now move to next
}):


app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
}):

third party middleware
npm i morgan
const morgan = require('morgan')

app.use(morgan('dev'));

// middleware comes shipped with express 
static file -img,css we wouldn't be access to that file from browser
static middleware

app.use(express.static('public'));

now if we link index.html files to the css file present in the public folder it will work










the use method is genearlly used to run some middleware code

app.use(func),  app.get('/', func)

the difference being the get handler only fire function for get request to a certain route
the use method run for every type of request to all route including post request

middleware run from top to bottom in our code
as soon as the response is send we dont carryaround in the code


middleware examples ->

logger middleware to log details of every request
authentication check middleware for protected routes
middleware to parse json data from request
return 404 pages

there are tones of middleware function aready created
for us to use


server protects all of our file automaticaly from usage in a browser
so they cant just acess any of our file whenever they want to
we need to specify what file can be accessed

for that we can use the static middleware
static file -> css, image that we will make public

