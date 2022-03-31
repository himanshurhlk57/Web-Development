// fetch api

// if the path or the endpoint we have given is wrong
// in that case also the it is going to get resolved
// but it will return status code 404
// Only in the case of network error or something the
// promise gonna reject and we will get the error

// the response objec that we get is not actually the
// json data we need to convert it into json data
fetch("luigi.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

  // first of all we fetch the data then we take the response
  // and we return response.json that return a promise on that 
  // we use then and inside that we fire callback function and get the data



///using async await

const getTodos = async () => {
  const response = await fetch("./luigi.json");
  const data = await response.json();
  console.log(data);
};

getTodos();

// throw error











Async JavaScript 

Governs how we perform tasks which take some time to complete 
(e.g. Getting data from a database)

Start something now and finish it later 

Synchoronous JavaScript, Single Threaded

JavaScript can run one statement at a time line by line 

HTTP Requests

Make HTTP requests to get data from another server 
we make these requests to API endpoints 

once we make a request to an endpoint from the browser
we typically get back a selection of data in a format 
called json(very much like js object)

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  // json response 

  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }


Json
A data format that most apis return
to us when we make a request
Looks like array with lots of javascript objects inside it but it's not it's just
a string the string is formatted in a way that
looks like javascript objects with curly braces
and key value pairs but it is still just a string and that's all json essentially is

Json -> String which look like javascript objects

Json has to be string because when a browser exchanges data with a server it has to be done
on text format that is the format of data transfer and that is why we use json format

// Turn the json to real javascript object

take all the json and turn it into a javascript array of objects

const data = JSON.parse(JSON String)
const data = JSON.parse()

Lets put some data in todo.json file
By default .json treat it as a string

[
{
"text": "play mariokart",
"author": "shaun",
"points": 20
},
{
"text": "play mariokart",
"author": "shaun",
"points": 20
}

]



