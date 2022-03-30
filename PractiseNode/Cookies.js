Cookies gives us the way to store data in the user's browser
also can be used to track internet activity by services like google analytic

data in cookie can be of like 
name = shaun, age = 30, isEmployee = true

How this work

when a request is send to our server we can create a cookie at that moment
in time and we can decide at that point what data the cookie will hold
as well as things like how long the cookie should last inside the browser
the cookie is then send back to the browser in the server response and 
the browser registered it now that cookie is storing the data in user browser

Every request the browser makes thereafter to our server is send with whatever
cookie we stored to the server with that request and on the server we can access 
it.
This process is how will we authenticate user this cookie hold jwt to
identify the userr and when the server see it can verify and authenticate them

// cookie
app.get('/set-cookies', (req, res) => {
  res.setHeader('Set-Cookie', 'newUser=true');
  res.send('you got the cookie!')
})

// currently this has expiry as session means
// whenever i close the browser this cookie will be 
// deleted from the browser  

// third party package to use cookie i.e cookie-parser

npm i cookie-parser

const cookieParser = require('cookie-parser') // middleware
app.use(cookieParser())

// send cookie from the server
app.get('/set-cookies', (req, res) => {
  // by default the age is session 
  // secure means that this cookie can only be send when the request is https
  res.cookie('newUser', false, { maxAge: 100000, secure: true})
  res.cookie('isEmployee', true)
  res.send('you got the cookie!')
})


// read cookie on the server we receive from the browser

app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  res.json(cookies)
})
