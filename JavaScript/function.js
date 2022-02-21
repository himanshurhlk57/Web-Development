// 1 -> Callbacks

function computeAndPrint(firstNum, secondNum, func){
	console.log(func(firstNum, secondNum));
}

function add(firstNum, secondNum){
	return firstNum + secondNum;
}

computeAndPrint(42,5,add);

// Assignin a function named func to another function add

const add1 = function func(firstNum, secondNum){
	return firstNum + secondNum;
}

console.log(add1(2,3));

// we can also write the upper function as 

const add2 = (firstNum, secondNum) => {
	return firstNum + secondNum;
}

console.log(add2(3,3));

// also if the return statement is doing only one task we can do
const add3 = (firstNum, secondNum) => firstNum + secondNum;
console.log(add3(3,7));


//passing arrow function as a argument 
computeAndPrint(42,7, (firstNum, secondNum) => firstNum + secondNum);



// functions are also objects in JS

// Callbacks are functions that are passed as arguments to another function


// 1-  Callback

function computeAndPrint(firstNum, secondNum, func) {
    console.log(func(firstNum, secondNum));
}

function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

computeAndPrint(42, 5, add); //47


2 -> Question in different way of writing the function

// function which takes 3 numbers (principal, rate and time) and returns its SI.
// SI = (principal*rate*time)/100
// Assign the unnamed function to a variable name simpleInterest.
// Call simpleInterest and print the returned value for the following values:
// 10000, 5, 12
// 200000, 10, 8
// 15000, 14, 2



// i -> Using unnamed function

const simpleInterest = function(principal, rate, time){
	const SI = (principal * rate * time)/100;
	return SI;
}

console.log(simpleInterest(10000, 5, 12));
console.log(simpleInterest(200000, 10, 8));
console.log(simpleInterest(15000, 14, 2));

// ii -> Using arrow function
// Arrow function is a modern way to create functions and make the code much shorter

const simpleInterest = (principal, rate, time) => {
	const SI = (principal * rate * time)/100;
	return SI;
}

console.log(simpleInterest(10000, 5, 12));
console.log(simpleInterest(200000, 10, 8));
console.log(simpleInterest(15000, 14, 2));

// iii-> If the function has only one statement (which is also the return statment) then we can shorten it further like this:

const simpleInterest = (principal, rate, time) => (principal * rate * time)/100;

console.log(simpleInterest(10000, 5, 12));
console.log(simpleInterest(200000, 10, 8));
console.log(simpleInterest(15000, 14, 2));

// iv - > In case a single paramter is in function we can write

const increment = num => num + 1;


















function computeAndPrint(firstNum, secondNum, func) {
    console.log(func(firstNum, secondNum));
}

function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide (firstNum, secondNum) {
    return firstNum / secondNum;
}

computeAndPrint(42, 5, add); //47
computeAndPrint(42, 5, subtract); //37
computeAndPrint(42, 5, multiply); //210
computeAndPrint(42, 5, divide); //8.4

// We can even pass the function directly:

computeAndPrint(42, 5, function modulus(firstNum, secondNum) {
    return firstNum % secondNum;
}); //2


// We've learned that we can write functions like this:

function func(firstNum, secondNum) {
    return firstNum + secondNum;
}

const add = func;

// If we can create an add function by assigning another function to it, we can in fact write the above code directly like this:

const add = function func(firstNum, secondNum) {
    return firstNum + secondNum;
}

// Here, we are assigning a function named func to another function add. If we want that every caller should directly call the add function instead of the func function, there is no need to have the name func as well. We can remove the function name and rewrite the above code as:

const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
}

// This is known as an unnamed function whereas the one with a function name is called a named function.