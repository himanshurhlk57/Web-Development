// function login(){
// 	setTimeout(() => {
// 		console.log('Login');
// 	}, 0);
// }

// login();
// console.log('Redirecting');

// Output ->
// Redirecting 
// Login

// Callback
// Now if we want to print login first and then Redirecting then we need to pass a callback function

// function login(cb){
// 	setTimeout(() => {
// 		console.log('Login');
// 		cb();
// 	}, 0);
// }

// login(() => {
//  console.log('Redirecting');	
// });



// Nesting i.e callback hell is solved by promises

function login(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			
		console.log('Login');
		resolve();
	}, 0);
	})
	
}

// Login function here returning a promise
// First do login then do the console.log('Redirecting');
login().then(() => {
	console.log('Redirecting');
});


// If we want to reject

function login(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			
		console.log('Login');
		reject();
	}, 0);
	})
	
}

// Login function here returning a promise
// First do login then do the console.log('Redirecting');
login().then(() => {
	console.log('Redirecting');
}).catch(err => {
	console.log('error');
});


