A promise has two state either its gonna fulfilled
or it is not gonna be fulfilled

A promise is a event that might be fulfilling in the future or
might be not
// without promise

const first = () => {
	return "I am one";
};

const second = () => {
	setTimeout(() => {
		return "I am second";
	}, 2000);
};


const third = () => {
	return "I am third";
};

const callMe = () => {
	let valueOne = first();
	console.log(valueOne);

	let valueTwo = second();
	console.log(valueTwo);

	let valueThree = third();
	console.log(valueThree);
}

callMe();

// with promise
if we do async ( ) in second
it will say there is a promise involved that is 
not fulfilled

const first = () => {
	return "I am one";
};

const second = () => {
	 return new Promise((resolve, reject) => {
     setTimeout(() => {
			 resolve ("I am two");
		 }, 3000);
	 });
};


const third = () => {
	return "I am third";
};

const callMe = async () => {
	let valueOne = first();
	console.log(valueOne);

	let valueTwo = await second();
	console.log(valueTwo);

	let valueThree = third();
	console.log(valueThree);
}

callMe();








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


