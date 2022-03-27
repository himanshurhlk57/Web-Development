// lets overcome callback hell and use promises
// Promise is javascript inbuilt object or you can call it a class
//will return the promise instance
// inside the promise function it gives us access to two things first
// is resolve and second is reject both resolve and reject are function
// if there's any error lets say network request failed in that case will use reject
// resolve say whatver work we had is done lets resolve this or end this
// because we are returning promise from register so on that we can use
// then keyword i.e register().then() means first call register
// and then do next work in then we get a function in which
// we receive data the data is whatevr we pass in resolve(inside this)

// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("User Registered");
//       resolve();
//     }, 2000);
//   });
// }

// lets say i reject the promise now i have the error in our first function itself other functions below it will not run

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("Error while registering");
      console.log("User Registered");
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Welcome email sent");
      resolve();
    }, 5000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Logined");
      resolve();
    }, 1000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Get user data");
      resolve();
    }, 4000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data displayed");
      resolve();
    }, 6000);
  });
}

// register().then(() => {});
// after register we want to call send email function
// register().then(sendEmail);

// now to print login after email we need to return promise from sendMail also and resolve it
// register().then(sendEmail).then(login);
// sendEmail();
// login();
// getUserData();
// displayUserData();

// register().then(sendEmail).then(login).then(getUserData).then(displayUserData);

// lets handle error using catch
// in catch annonymus function we have access to the data that we are passing from reject
register()
  .then(sendEmail)
  .then(login)
  .then(getUserData)
  .then(displayUserData)
  .catch((err) => {
    console.log("Error: ", err);
  });

console.log("Other application work");

//now all function output will work in the sequence manner
// the manner in which it is written now matter how much time it takes it to execute as they are
// asynchromous function call so they run in background so with the help of promise we managed ti achived
// the require manner in which we want our code to execute
