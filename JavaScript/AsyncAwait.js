// way of writing better way of promise code bascially a synctatic sugar
// visualling more appleaing and modular
// Also writing code in async manner makes asynchoronus code look like synchronous

// await register()

// till the time register call not end donot move ahead

// we can also use await keyboard inside async function
// the function which is async inside that we can use await keyboard

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User Registered");
      resolve('sucess');
    }, 2000);
  });
}

// function sendEmail() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Welcome email sent");
//       resolve();
//     }, 5000);
//   });
// }

//  reject and show error

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("Error occured");
      console.log("Welcome email sent");
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

// make this function async
//below code is visually synchronous but its acutually asynchronous
// because we have made this function async so bidefault it will return promise

// function authenticate() {
// async function authenticate() {
//   await register();
//   await sendEmail();
//   await login();
//   await getUserData();
//   await displayUserData();
//   return new Promise  by default
// }

// another way to handle error
async function authenticate() {
  try {
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
  } catch (err) {
    console.log(err);
  }
}

// async function authenticate() {
//   await register();
//   await sendEmail();
//   await login();
//   await getUserData();
//   await displayUserData();
//   return new Promise  by default
// }

// i.e means the authenticate is promise

// authenticate();

authenticate().then(() => {
  console.log("All set!");
});

//to handle error
//as soon as error occurred next methods will not run
// authenticate()
//   .then(() => {
//     console.log("All set!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("Other application work");
