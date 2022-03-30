User login from our web form from the website which send a request to the server with their
credentials lets say email and password
the server then checks those credentials the email and password against those stored
in a database for that user now if they are correct the server then creates a json web 
token for the user and it sends it to the browser where it can be stored in a cookie
the json web token contains encoded data about that user to identify them 
so for as long as they have this token in the cookie then they are considered logged in
and authenticated 
now the user has this json web token stored in a cookie in their browser 
now cookies are sent to the server by the browser for every request they make 
example for new pages on the website so now when the server gets that token from that 
cookie in the request it can verify and decode it to identify the user now if it
is verified to be a valid token the user can be seen as logged in by the server and 
the server and the server can then decide to show the user protected data or pages
which require the user to be authenticated if the token is missing or not valid 
the user is not authenticated and the server then can send some kind of error or 
direct them to the login page or something.

json web token which is basically an encoded long string of characters made up of three parts
the red the purple and then the blue and they correspond 
they correspond to three different part which are the decoded version of those strings 
red part is token header(metadata for the token)
second part is payload (data that is encoded to jwt)(used to identify the user)
last part ties everything together i.e signature(used to verify the token on the server)

encoded data is created on the server and send back to the browser that stored in the
user cookie

when our server is creating the jwt after a user succesfully logs in or signs up then
it creates the header part and the payload part first and encodes them both then to
sign the token or to add the signature it takes both of those two part and it hashes them 
together with something called a secret i.e secure secret string stored on the server 
this secret must remain a secret its the key to unlocking the jwt and the only way to verify 
a token this can't be published to any kind of public .

when those three things are hashed together it creates the token signature signature token 
is then added to the end of the jwt and it can be sent to the browser 

jwt is then added into a cookie and sent and stored in a browser so for any subsequent 
request to the server the token is then received by the server inside that cookie
the server can then verify this token on every request by looking at the header
and the payload and hashing them with the secret which is stored in the server 
if the hashed value of those two things with the secret matches the signature is also 
the hashed value of those two parts and the secret it knows then that it's valid and
jwt has not been tempered with on the client of the jwt has been tempered then its the proble,
