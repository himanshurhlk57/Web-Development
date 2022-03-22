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

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Registered");
      resolve();
    }, 2000);
  });
}

function sendEmail() {
  setTimeout(() => {
    console.log("Welcome email sent");
  }, 5000);
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

// register().then(() => {});
// after register we want to call send email function
register().then(sendEmail);
// sendEmail();
// login();
// getUserData();
// displayUserData();

console.log("Other application work");
