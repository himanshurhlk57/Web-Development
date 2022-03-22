/* Execute things Line by Line

1 - Register
2 - Send welcome email
3 - Login
4 - Get user data
5 - Display user data
*/

// A function which we stay in call stack for three second
// and also this is synchronous function so it will block
// all the function to get executed till it gets executed

// Below all codes are javascript means till the time first
// function will not gets excuted completely next line of
// code or function will not gets execute
// this is the problem with synchoronus programming that its
// blocks other things to get executed

// function waitForThreeSeconds() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

function register() {
  //   waitForThreeSeconds();
  setTimeout(() => {
    console.log("User Registered");
  }, 2000);
}

function sendEmail() {
  //   waitForThreeSeconds();
  setTimeout(() => {
    console.log("Welcome email sent");
  }, 1000);
}

function login() {
  //   waitForThreeSeconds();
  setTimeout(() => {
    console.log("User Logined");
  }, 1000);
}

function getUserData() {
  //   waitForThreeSeconds();
  setTimeout(() => {
    console.log("Get user data");
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data displayed");
  }, 1000);
}

// register();
// sendEmail();
// login();
// getUserData();
// displayUserData();

// console.log("Other application work");

// Now because we make all the function asynchoronus
// the last line code that is other application work
// wil get consoled in the statement then all the function
// will get executed

// the time we have given inside out setTimeout
// is also not sure about whether it will take one
// second or more

/* Now lets take an example that register function 
takes 2 sec 

now user registed will get consoled after all the function
gets executed because all are taking 1 sec
wheras it is taking 2 sec
output - >
Other application work
Welcome email sent
User Logined       
Get user data      
User data displayed
User Registered

Because it taking 2 sec more than other function
we are not getting the expected output 
but we want till the user doesnot register we
donot want other function to get executed

whatever the time all the function takes 
usse hume kuch matlab nhi hain we want that 
all the function gets executed line by line only

for that we will make use of callback 
higher order function means that can take
other function as a paramter or return a function
so will take a callback function as a paramater in register
and cut paste all the call inside that callback function

*/

function register(callback) {
  setTimeout(() => {
    console.log("User Registered");
    callback();
  }, 2000);
}

function sendEmail() {
  setTimeout(() => {
    console.log("Welcome email sent");
  }, 1000);
}

function login() {
  setTimeout(() => {
    console.log("User Logined");
  }, 1000);
}

function getUserData() {
  setTimeout(() => {
    console.log("Get user data");
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data displayed");
  }, 1000);
}

register(function () {
  sendEmail();
  login();
  getUserData();
  displayUserData();
});

console.log("Other application work");


// Now after passing the callback inside
// the registed function let it do his work and then calling
// the callback function we are getting the desired 
// output that is first userregisted and then all the things
// output - >
// Other application work
// User Registered
// Welcome email sent
// User Logined       
// Get user data      
// User data displayed

// now if we give email 2000 mili second then 
// still it will not give us desired result if.e send email will gets done 
// last and all things before now for this 
// we need to again pass call back from sendemail and 
// paste all the other function inside so and then invoke
// that callback function inside the email function

//now it doesnot matter which function will take what time
// all the things will get execute only line by line
// now the nesting function has become callback hell


//**** */
//Modern javascript has introduced promises
// with the use of promises will overcome nesting things as well as 
// callback hell


// Promises