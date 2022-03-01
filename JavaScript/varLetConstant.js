// Code with simran
Whatever variable you declare inside a function belongs to that function
Any variable declared with var keyboard is function scoped

function scoped

function displayAge(){
	var age = 24;
}
displayAge();
console.log(age); // age is not defined

//Block scope
if(true){
	var name = 'simran';
}
console.log(name);
//output simran accesible outside the curly braces
variable declared with var keyboard are not block scope
If the variable with var keyboard is not declared inside a function then it is a global variable

var is function scope
whereas let and const are blocked scope any variable declared with let and const is actually a blocked scope









Arrow function
// When we try to console this inside the arrow function it will print window because arrow function doesnt have their execution context so this points to its parent execution context i.e window.

// Let and Const are blocked scope.
// The variable inside the blocked scope i.e { }
// are only accesible inside the curly braces not outside it.
// 
// var is function scope
// Let and const are block scope
// If we declare any variable using const then we cant change the value of that variable

// If the var is not declared inside the function scope then its get assigned to window object.
// var product = 19;
// window.product will give us 19;



function register(){
	var username = 'rakesh';
	var password = 'secret';
}
console.log(username);
// not accesible outside the function scope 


var age = 18;
if(age >= 18){
	let driving = true;
}

console.log(driving); 
// Driving not accesible outside the if block


const age = 19;
age = 20;
//We cant do this


const age = {
	year: 19,
};

age.year = 20;
console.log(year); // 20
We can do this here age is a object








