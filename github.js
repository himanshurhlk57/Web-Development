// 1 -> Callback hell

// function register(callback) {
//   setTimeout(() => {
//     console.log("User Registered");
//     callback();
//   }, 5000);
// }

// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("Welcome email sent");
//     callback();
//   }, 3000);
// }

// function login() {
//   setTimeout(() => {
//     console.log("User Logined");
//   }, 2000);
// }

// register();
// sendEmail();
// login();

// register(function () {
//   sendEmail(function () {
//     login();
//   });
// });

// console.log("other application work");

// 2 -> Promise

// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("User Registered");
//       resolve();
//     }, 5000);
//   });
// }

// function sendEmail() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Welcome email sent");
//       resolve();
//     }, 3000);
//   });
// }

// function login() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("User Logined");
//       resolve();
//     }, 2000);
//   });
// }

// register().then(sendEmail).then(login);

// console.log("other application work");

// 3 -> Async Await

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Registered");
      resolve();
    }, 5000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Welcome email sent");
      resolve();
    }, 3000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Logined");
      resolve();
    }, 2000);
  });
}

async function authenticate() {
  await register();
  await sendEmail();
  await login();
}

authenticate();

console.log("other application work");
